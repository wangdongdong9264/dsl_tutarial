import { StateMachinParser, TokenBuffer } from "step_3";
import { ScanPatterns, StateMachineTokenizer } from "step_2";
import { input } from "../input.test";

// generate a regular recognizer
let scan = new ScanPatterns();
let lexer = new StateMachineTokenizer(input,scan.loadPatterns())
// console.log(parser.scannerBuffer)
// console.log(parser.recognizerPatterns);
lexer.startParser();
// console.log("tokenList",lexer.getTokenList())

let tokenBuffer = new TokenBuffer(lexer.getTokenList());
let parser = new StateMachinParser(tokenBuffer);
// debugger
parser.startParser();
// console.log("machineEvents-step3",parser.getMachineEvents());
console.log("resetEvents-step3",parser.getResetEvents());