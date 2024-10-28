import { GEvent } from "step_1";
import { TokenTypes } from "step_2";
import { TokenBuffer } from "step_3";

class StateMachineMatchValue {
    private matchString:string;

    constructor(value:string){
        this.matchString = value;
    }

    public getMatchString(){
        return this.matchString;
    }
}

class CombinatorResult {
    private tokens:TokenBuffer;
    private matchStatus:boolean;
    private matchValue:StateMachineMatchValue

    constructor(tokens:TokenBuffer,match:boolean,value:StateMachineMatchValue){
        this.tokens = tokens;
        this.matchStatus = match;
        this.matchValue = value
    }

    public getTokenBuffer(){
        return this.tokens;
    }

    public matchSuccess(){
        return this.matchStatus;
    }

    public getMatchValue(){
        return this.matchValue;
    }
}

abstract class Combinator {
    
    abstract recognizer(inbound:CombinatorResult):CombinatorResult;

    // setting the callback action of matching
    public action:(...results:StateMachineMatchValue[]) => void = () =>{

    }
    public setAction(action: (...results:StateMachineMatchValue[]) => void) {
        this.action = action;
        return this;
    }
}

/**
 * @description terminal combinator, match Token
 */
class TerminalParser extends Combinator {
  
    private tokenMatch:TokenTypes;

    /**
     * @description match the TokenType
     */
    constructor(match:TokenTypes){
        super();
        this.tokenMatch = match
    }

    /**
     * @description inbound => matching TokenType => result:CombinatorResult
     * @param inbound 
     * @returns CombinatorResult
     */
    recognizer(inbound: CombinatorResult): CombinatorResult {
        if(!inbound.matchSuccess()){
            return inbound;
        }
        let result;
        let tokens = inbound.getTokenBuffer();
        let t = tokens.nextToken();
        
        if(t.isTokenType(this.tokenMatch)){
            let outTokens = new TokenBuffer(tokens.makePoppedTokenList());
            result = new CombinatorResult(outTokens,true,new StateMachineMatchValue(t.getTokenValue()));

            this.action(result.getMatchValue());
        }else{
            result = new CombinatorResult(tokens,false,new StateMachineMatchValue(""));
        }
        return result;
    }
}


class AbstractSequenceCombinator extends Combinator {
    private productions:Combinator[];
    private isOptional:boolean;

    constructor(optional:boolean,productions:Combinator[]) {
        super();
        this.isOptional = optional
        this.productions = productions;
    }
    
    recognizer(inbound: CombinatorResult): CombinatorResult {
        if(!inbound.matchSuccess()){
            return inbound
        }
        let lastResult = inbound;
        let componentResults:StateMachineMatchValue[] = new Array(this.productions.length);
        let productionIndex = 0;
        
        while(lastResult.matchSuccess() && productionIndex < this.productions.length){
            let p = this.productions[productionIndex];
            lastResult = p.recognizer(lastResult);
            componentResults[productionIndex] = lastResult.getMatchValue();
            productionIndex = productionIndex + 1;
        }

        if(lastResult.matchSuccess()){
            this.action(...componentResults);
        }else if(this.isOptional){
            lastResult = new CombinatorResult(
                inbound.getTokenBuffer(),
                true,
                new StateMachineMatchValue("")
            )
        }else{
            lastResult = new CombinatorResult(
                inbound.getTokenBuffer(),
                false,
                new StateMachineMatchValue("")
            )
        }
        return lastResult;
    }
}

/**
 * C : A?
 */
class OptionlaSequenceCombinator extends AbstractSequenceCombinator {
    constructor(...productions:Combinator[]){
        super(true,productions)
    }
}

/**
 * C : A B
 */
class SequenceCombinator  extends AbstractSequenceCombinator {
    constructor(...productions:Combinator[]){
        super(false,productions)
    }
}

/**
 * C : A+
 */
class ListCombinator extends Combinator {
    private production:Combinator;
    constructor(production:Combinator){
        super();
        this.production = production;
    }

    recognizer(inbound: CombinatorResult): CombinatorResult {
        if(!inbound.matchSuccess()){
            return inbound;
        }
        let lastResult = inbound;
        let resusltValues:StateMachineMatchValue[] =[];

        while(lastResult.matchSuccess()){
            lastResult = this.production.recognizer(lastResult);
            if(lastResult.matchSuccess()){
                resusltValues.push(lastResult.getMatchValue())
            }
        }

        if(resusltValues.length > 0){
            this.action(...resusltValues);
            lastResult = new CombinatorResult(
                lastResult.getTokenBuffer(),
                true,
                new StateMachineMatchValue("")
            )
        }

        return lastResult;
    }
}

class StateMachineCombinatorParser {
    private machineEvents:GEvent[] = [];
    private matchineResetEvents:GEvent[] = [];

    private matchEventKeyword = new TerminalParser(TokenTypes.TT_EVENT);
    private matchEndKeyword = new TerminalParser(
        TokenTypes.TT_END
    )
    private matchEventDec = new SequenceCombinator(
        new TerminalParser(TokenTypes.TT_IDENTIFIER),
        new TerminalParser(TokenTypes.TT_IDENTIFIER)
    ).setAction(
        (...results) => {
            this.machineEvents.push(
                new GEvent(results[0].getMatchString(),results[1].getMatchString())
            )
        }
    ) 
    private matchEventList = new ListCombinator(this.matchEventDec);
    
    private matchEventBlock = new SequenceCombinator(
        this.matchEventKeyword,
        this.matchEventList,
        this.matchEndKeyword
    )
    
    private matchResetKeyword = new TerminalParser(TokenTypes.TT_RESET);
    private resetEvents = new ListCombinator(new TerminalParser(TokenTypes.TT_IDENTIFIER)).setAction(
        (...results) => {
            results.forEach(r => {
                this.matchineResetEvents.push(
                    this.machineEvents.find(e => e.getName() == r.getMatchString()) as GEvent
                )
            })
        }
    )
    private matchResetBlock = new OptionlaSequenceCombinator(
        this.matchResetKeyword,
        this.resetEvents,
        this.matchEndKeyword
    )

    public startPaser(input:CombinatorResult){
        let stateMachinePaser = new SequenceCombinator(
            this.matchEventBlock,
            this.matchResetBlock
        )
        stateMachinePaser.recognizer(input);
    }

    public getMachineEvents(){
        return this.machineEvents;
    }
    public getResets(){
        return this.matchineResetEvents;
    }
}


export {
    TerminalParser,
    CombinatorResult,
    StateMachineMatchValue,
    SequenceCombinator,
    OptionlaSequenceCombinator,
    ListCombinator,
    StateMachineCombinatorParser
}