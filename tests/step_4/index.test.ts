
import { GEvent } from "step_1";
import { ScanPatterns, StateMachineTokenizer, TokenTypes } from "step_2";
import { TokenBuffer } from "step_3";
import { 
    CombinatorResult,
    ListCombinator,
    SequenceCombinator,
    StateMachineCombinatorParser,
    StateMachineMatchValue,
    TerminalParser 
} from "step_4";
import { input } from "../input.test";

let scan = new ScanPatterns();
let lexer = new StateMachineTokenizer(input,scan.loadPatterns())
lexer.startParser();
// console.log("tokenList",lexer.getTokenList())

// 终结符组合子测试
const t1 = ()  => {
    let t = new TerminalParser(TokenTypes.TT_EVENT);
    let inputCombinatorResult = new CombinatorResult(
        new TokenBuffer(lexer.getTokenList()),
        true,
        new StateMachineMatchValue("")
    );
    
    let r = t.recognizer(inputCombinatorResult);
    console.log("cc",r);
}

const t2 = () => {
    let events:GEvent[] = [] ;
    // eventDec : identifier identifier
    let eventDec = new SequenceCombinator(
        new TerminalParser(TokenTypes.TT_IDENTIFIER),
        new TerminalParser(TokenTypes.TT_IDENTIFIER)
    ).setAction(
        (...results) => {
            // console.log("eventDec",results)
            let e = new GEvent(results[0].getMatchString(),results[1].getMatchString())
            events.push(e);
        }
    )
    // eventList : eventDec+
    let eventList = new ListCombinator(eventDec).setAction(
        (...results) => {
            // console.log("EventList",results);
        }
    );
    
    // eventBlock : eventsKeyword eventList endKeyword
    let matchEventBlock = new SequenceCombinator(
        new TerminalParser(TokenTypes.TT_EVENT),
        eventList,
        new TerminalParser(TokenTypes.TT_END)
    ).setAction(
        (...results) =>{
            // console.log("eventBlock",results)
        }
    )

    let inputCombinatorResult = new CombinatorResult(
        new TokenBuffer(lexer.getTokenList()),
        true,
        new StateMachineMatchValue("")
    );
    
    let r = matchEventBlock.recognizer(inputCombinatorResult);
    console.log("event",events);
}

const t3 = () => {
    let inputCombinatorResult = new CombinatorResult(
        new TokenBuffer(lexer.getTokenList()),
        true,
        new StateMachineMatchValue("")
    );
    let machinPaser = new StateMachineCombinatorParser();

    machinPaser.startPaser(inputCombinatorResult);
    console.log("eventsc-step4",machinPaser.getMachineEvents());
    console.log("reset-step4",machinPaser.getResets())
}

// t1()
// t2()
t3()
