// Generated from src/step_5/stateMachine.g by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { StateMachineContext } from "./stateMachineParser";
import { EventListContext } from "./stateMachineParser";
import { EventContext } from "./stateMachineParser";
import { ResetEventListContext } from "./stateMachineParser";
import { CommandListContext } from "./stateMachineParser";
import { CommandContext } from "./stateMachineParser";
import { StateListContext } from "./stateMachineParser";
import { ActionListContext } from "./stateMachineParser";
import { TransitionContext } from "./stateMachineParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `stateMachineParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface stateMachineVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `stateMachineParser.stateMachine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateMachine?: (ctx: StateMachineContext) => Result;

	/**
	 * Visit a parse tree produced by `stateMachineParser.eventList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEventList?: (ctx: EventListContext) => Result;

	/**
	 * Visit a parse tree produced by `stateMachineParser.event`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEvent?: (ctx: EventContext) => Result;

	/**
	 * Visit a parse tree produced by `stateMachineParser.resetEventList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResetEventList?: (ctx: ResetEventListContext) => Result;

	/**
	 * Visit a parse tree produced by `stateMachineParser.commandList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommandList?: (ctx: CommandListContext) => Result;

	/**
	 * Visit a parse tree produced by `stateMachineParser.command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand?: (ctx: CommandContext) => Result;

	/**
	 * Visit a parse tree produced by `stateMachineParser.stateList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateList?: (ctx: StateListContext) => Result;

	/**
	 * Visit a parse tree produced by `stateMachineParser.actionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActionList?: (ctx: ActionListContext) => Result;

	/**
	 * Visit a parse tree produced by `stateMachineParser.transition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransition?: (ctx: TransitionContext) => Result;
}

