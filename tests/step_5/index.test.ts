import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { stateMachineLexer } from 'step_5/stateMachineLexer';
import { EventContext, ResetEventListContext, stateMachineParser } from 'step_5/stateMachineParser';

import { input } from '../input.test';

// Create the lexer and parser
// let inputStream = new ANTLRInputStream("text"); // 'ANTLRInputStream' is deprecated. please use `CharStreams` interface.
let inputStream = CharStreams.fromString(input);
let lexer = new stateMachineLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new stateMachineParser(tokenStream);

// Parse the input, where `compilationUnit` is whatever entry point you defined
// let tree = parser.compilationUnit();
let tree = parser.stateMachine();
// debugger
// console.log('tree', tree.toStringTree());



// ------dividing line------



import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { stateMachineVisitor } from 'step_5/stateMachineVisitor'
import { GEvent } from 'step_1';

// Extend the AbstractParseTreeVisitor to get default visitor behaviour
class CountFunctionsVisitor extends AbstractParseTreeVisitor<number> implements stateMachineVisitor<void> {
    events: GEvent[] = [];
    resetEvents: GEvent[] = [];
    defaultResult() {
        return 0
    }

//   aggregateResult(aggregate: number, nextResult: number) {
//     return aggregate + nextResult
//   }

//   visitFunctionDeclaration(context: FunctionDeclarationContext): number {
//     return 1 + super.visitChildren(context)
//   }

//   visitEvent?: ((ctx: EventContext) => number) | undefined;
    visitEvent(ctx: EventContext) {
        const firstText = ctx.getChild(0).text
        const secondText = ctx.getChild(1).text
        const g = new GEvent(firstText, secondText)
        this.events.push(g)
    }

    // visitResetEventList?: ((ctx: ResetEventListContext) => void) | undefined;
    visitResetEventList(ctx: ResetEventListContext) {
        const id = ctx.ID()
        // debugger
        id.forEach(t => {
            // console.log('t', t)
            const result = this.events.find(e => e.getName() === t.text)
            if (result) {
                this.events.push(result)
            }
        })
    }
  
}

// Create the visitor
const countFunctionsVisitor = new CountFunctionsVisitor()
// Use the visitor entry point
countFunctionsVisitor.visit(tree)

// console.log('event', countFunctionsVisitor.events)
console.log('resetEvents', countFunctionsVisitor.resetEvents)