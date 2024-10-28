import {Command,GEvent,State,StateMachine} from "step_1"
import { Token, TokenTypes, } from "step_2";

/**
 * @description the token to be analyzed
 */
class TokenBuffer {
    private tokens: Token[];
    private position: number;

    constructor(tokens: Token[]) {
        this.tokens = tokens;
        this.position = 0;
    }

    public getCurrentPosition() {
        return this.position;
    }
    public nextToken() {
        return this.tokens[this.position]
    }
    public popToken() {
        this.position = this.position + 1;
    }
    public resetCurrentPostion(save: number) {
        this.position = save;
    }

    /**
     * @description remove the first token and return the rest
     * @returns token[]
     */
    public makePoppedTokenList(){
        this.tokens.shift();
        this.position = 0;
        return this.tokens;
    }
}

/**
 * @description recursive descent parser
 */
class StateMachinParser {
    private tokenBuffer: TokenBuffer;
    private machineResult: StateMachine;
    private machineEvents: GEvent[] = [];
    private machineComands: Command[] = [];
    private resetEvents: GEvent[] = [];
    private machineStates: Map<string, State> = new Map();
    private partialState: State | undefined;

    constructor(token: TokenBuffer) {
        this.tokenBuffer = token;
        this.machineResult = new StateMachine(this.partialState as State);
    }

    public startParser() {
        if (this.stateMachine()) {

        }
        return this.machineResult;
    }
    public getMachineEvents(){
        return this.machineEvents;
    }
    public getResetEvents(){
        return this.resetEvents;
    }

    private stateMachine() {
        let parseSucces = false;

        if (this.eventBlock()) {
            if (this.optionalResetBlock()) {
                if (this.optionalCommandBlock()) {
                    if (this.stateList()) {
                        parseSucces = true;
                    }
                }
            }
        }

        return parseSucces;
    }

    private eventBlock() {
        let parseSucces = false;
        let t;
        let save = this.tokenBuffer.getCurrentPosition();
        t = this.tokenBuffer.nextToken();

        if (t.isTokenType(TokenTypes.TT_EVENT)) {
            this.tokenBuffer.popToken();
            parseSucces = this.eventDecList();
        }
        if(parseSucces){
            t = this.tokenBuffer.nextToken();
            if(t.isTokenType(TokenTypes.TT_END)){
                this.tokenBuffer.popToken();
            }else{
                parseSucces = false;
            }
        }

        if(!parseSucces){
            this.tokenBuffer.resetCurrentPostion(save);
        }
        return parseSucces;
    }
    private eventDecList() {
        let parseSucces = false;
        let save = this.tokenBuffer.getCurrentPosition();
        if (this.eventDec()) {
            parseSucces = true;
            while (parseSucces) {
                parseSucces = this.eventDec();
            }
            parseSucces = true;
        } else {
            this.tokenBuffer.resetCurrentPostion(save);
        }
        return parseSucces;
    }
    private eventDec() {
        let parseSucces = false;
        let save = this.tokenBuffer.getCurrentPosition();
        let t = this.tokenBuffer.nextToken();
        let left = "";
        let right = "";

        if(t.isTokenType(TokenTypes.TT_IDENTIFIER)){
            left = this.consumeIdentifier(t);
            t = this.tokenBuffer.nextToken();
            if(t.isTokenType(TokenTypes.TT_IDENTIFIER)){
                right = this.consumeIdentifier(t);
                parseSucces = true;
            }
        }

        if(parseSucces){
            this.makeEventDec(left,right);
        }else{
            this.tokenBuffer.resetCurrentPostion(save);
        }

        return parseSucces;
    }
    private consumeIdentifier(t:Token){
        let identName = t.getTokenValue();
        this.tokenBuffer.popToken();
        return identName;
    }
    private makeEventDec(name:string,code:string){
        this.machineEvents.push(new GEvent(name,code));
    }

    // resetEvent
    private optionalResetBlock() {
        let parseSucces = false;
        let svae = this.tokenBuffer.getCurrentPosition();
        let t = this.tokenBuffer.nextToken();
        if(t.isTokenType(TokenTypes.TT_RESET)){
            this.tokenBuffer.popToken();
            t = this.tokenBuffer.nextToken();
            parseSucces = true;
            while(!t.isTokenType(TokenTypes.TT_END) && parseSucces){
                parseSucces = this.resetEventDecs();
                t = this.tokenBuffer.nextToken()
            }
        }
        
        return parseSucces;
    }
    private resetEventDecs() {
        let parseSucces = false;
        let t = this.tokenBuffer.nextToken();
        if(t.isTokenType(TokenTypes.TT_IDENTIFIER)){
            this.resetEvents.push(
                this.findEventFromName(t.getTokenValue()) as GEvent
            )
            parseSucces = true;
            this.tokenBuffer.popToken();
        }
        return parseSucces;
    }
    private findEventFromName(eventName:string){
        return this.machineEvents.find(e => e.getName() == eventName)
    }

    private optionalCommandBlock() {
        let parseSucces = false;
        return parseSucces;
    }
    private stateList() {
        let parseSucces = false;
        return parseSucces;
    }

}

export{
    TokenBuffer,
    StateMachinParser
}
