import { ScanPatterns, StateMachineTokenizer } from "step_2";
import { input } from "../input.test";


// generate a regular recognizer
let scan = new ScanPatterns();
let parser = new StateMachineTokenizer(input,scan.loadPatterns())
// console.log(parser.scannerBuffer)
// debugger
// console.log(parser.recognizerPatterns);

parser.startParser();
console.log("tokenList", parser.getTokenList())