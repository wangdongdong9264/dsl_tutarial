// Generated from src/step_5/stateMachine.g by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `stateMachineParser`.
 */
export interface stateMachineListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `stateMachineParser.stateMachine`.
	 * @param ctx the parse tree
	 */
	enterStateMachine?: (ctx: StateMachineContext) => void;
	/**
	 * Exit a parse tree produced by `stateMachineParser.stateMachine`.
	 * @param ctx the parse tree
	 */
	exitStateMachine?: (ctx: StateMachineContext) => void;

	/**
	 * Enter a parse tree produced by `stateMachineParser.eventList`.
	 * @param ctx the parse tree
	 */
	enterEventList?: (ctx: EventListContext) => void;
	/**
	 * Exit a parse tree produced by `stateMachineParser.eventList`.
	 * @param ctx the parse tree
	 */
	exitEventList?: (ctx: EventListContext) => void;

	/**
	 * Enter a parse tree produced by `stateMachineParser.event`.
	 * @param ctx the parse tree
	 */
	enterEvent?: (ctx: EventContext) => void;
	/**
	 * Exit a parse tree produced by `stateMachineParser.event`.
	 * @param ctx the parse tree
	 */
	exitEvent?: (ctx: EventContext) => void;

	/**
	 * Enter a parse tree produced by `stateMachineParser.resetEventList`.
	 * @param ctx the parse tree
	 */
	enterResetEventList?: (ctx: ResetEventListContext) => void;
	/**
	 * Exit a parse tree produced by `stateMachineParser.resetEventList`.
	 * @param ctx the parse tree
	 */
	exitResetEventList?: (ctx: ResetEventListContext) => void;

	/**
	 * Enter a parse tree produced by `stateMachineParser.commandList`.
	 * @param ctx the parse tree
	 */
	enterCommandList?: (ctx: CommandListContext) => void;
	/**
	 * Exit a parse tree produced by `stateMachineParser.commandList`.
	 * @param ctx the parse tree
	 */
	exitCommandList?: (ctx: CommandListContext) => void;

	/**
	 * Enter a parse tree produced by `stateMachineParser.command`.
	 * @param ctx the parse tree
	 */
	enterCommand?: (ctx: CommandContext) => void;
	/**
	 * Exit a parse tree produced by `stateMachineParser.command`.
	 * @param ctx the parse tree
	 */
	exitCommand?: (ctx: CommandContext) => void;

	/**
	 * Enter a parse tree produced by `stateMachineParser.stateList`.
	 * @param ctx the parse tree
	 */
	enterStateList?: (ctx: StateListContext) => void;
	/**
	 * Exit a parse tree produced by `stateMachineParser.stateList`.
	 * @param ctx the parse tree
	 */
	exitStateList?: (ctx: StateListContext) => void;

	/**
	 * Enter a parse tree produced by `stateMachineParser.actionList`.
	 * @param ctx the parse tree
	 */
	enterActionList?: (ctx: ActionListContext) => void;
	/**
	 * Exit a parse tree produced by `stateMachineParser.actionList`.
	 * @param ctx the parse tree
	 */
	exitActionList?: (ctx: ActionListContext) => void;

	/**
	 * Enter a parse tree produced by `stateMachineParser.transition`.
	 * @param ctx the parse tree
	 */
	enterTransition?: (ctx: TransitionContext) => void;
	/**
	 * Exit a parse tree produced by `stateMachineParser.transition`.
	 * @param ctx the parse tree
	 */
	exitTransition?: (ctx: TransitionContext) => void;
}

