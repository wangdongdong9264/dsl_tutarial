// Generated from src/step_5/stateMachine.g by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { stateMachineListener } from "./stateMachineListener";
import { stateMachineVisitor } from "./stateMachineVisitor";


export class stateMachineParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly ID = 10;
	public static readonly WS = 11;
	public static readonly RULE_stateMachine = 0;
	public static readonly RULE_eventList = 1;
	public static readonly RULE_event = 2;
	public static readonly RULE_resetEventList = 3;
	public static readonly RULE_commandList = 4;
	public static readonly RULE_command = 5;
	public static readonly RULE_stateList = 6;
	public static readonly RULE_actionList = 7;
	public static readonly RULE_transition = 8;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"stateMachine", "eventList", "event", "resetEventList", "commandList", 
		"command", "stateList", "actionList", "transition",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'events'", "'end'", "'resetEvents'", "'commands'", "'state'", 
		"'actions'", "'{'", "'}'", "'=>'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "ID", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(stateMachineParser._LITERAL_NAMES, stateMachineParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return stateMachineParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "stateMachine.g"; }

	// @Override
	public get ruleNames(): string[] { return stateMachineParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return stateMachineParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(stateMachineParser._ATN, this);
	}
	// @RuleVersion(0)
	public stateMachine(): StateMachineContext {
		let _localctx: StateMachineContext = new StateMachineContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, stateMachineParser.RULE_stateMachine);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 18;
			this.eventList();
			this.state = 20;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === stateMachineParser.T__2) {
				{
				this.state = 19;
				this.resetEventList();
				}
			}

			this.state = 23;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === stateMachineParser.T__3) {
				{
				this.state = 22;
				this.commandList();
				}
			}

			this.state = 28;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === stateMachineParser.T__4) {
				{
				{
				this.state = 25;
				this.stateList();
				}
				}
				this.state = 30;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventList(): EventListContext {
		let _localctx: EventListContext = new EventListContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, stateMachineParser.RULE_eventList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 31;
			this.match(stateMachineParser.T__0);
			this.state = 35;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === stateMachineParser.ID) {
				{
				{
				this.state = 32;
				this.event();
				}
				}
				this.state = 37;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 38;
			this.match(stateMachineParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public event(): EventContext {
		let _localctx: EventContext = new EventContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, stateMachineParser.RULE_event);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 40;
			this.match(stateMachineParser.ID);
			this.state = 41;
			this.match(stateMachineParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resetEventList(): ResetEventListContext {
		let _localctx: ResetEventListContext = new ResetEventListContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, stateMachineParser.RULE_resetEventList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 43;
			this.match(stateMachineParser.T__2);
			this.state = 47;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === stateMachineParser.ID) {
				{
				{
				this.state = 44;
				this.match(stateMachineParser.ID);
				}
				}
				this.state = 49;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 50;
			this.match(stateMachineParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public commandList(): CommandListContext {
		let _localctx: CommandListContext = new CommandListContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, stateMachineParser.RULE_commandList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 52;
			this.match(stateMachineParser.T__3);
			this.state = 56;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === stateMachineParser.ID) {
				{
				{
				this.state = 53;
				this.command();
				}
				}
				this.state = 58;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 59;
			this.match(stateMachineParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public command(): CommandContext {
		let _localctx: CommandContext = new CommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, stateMachineParser.RULE_command);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 61;
			this.match(stateMachineParser.ID);
			this.state = 62;
			this.match(stateMachineParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stateList(): StateListContext {
		let _localctx: StateListContext = new StateListContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, stateMachineParser.RULE_stateList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 64;
			this.match(stateMachineParser.T__4);
			this.state = 65;
			this.match(stateMachineParser.ID);
			this.state = 67;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === stateMachineParser.T__5) {
				{
				this.state = 66;
				this.actionList();
				}
			}

			this.state = 72;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === stateMachineParser.ID) {
				{
				{
				this.state = 69;
				this.transition();
				}
				}
				this.state = 74;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 75;
			this.match(stateMachineParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public actionList(): ActionListContext {
		let _localctx: ActionListContext = new ActionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, stateMachineParser.RULE_actionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			this.match(stateMachineParser.T__5);
			this.state = 78;
			this.match(stateMachineParser.T__6);
			this.state = 82;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === stateMachineParser.ID) {
				{
				{
				this.state = 79;
				this.match(stateMachineParser.ID);
				}
				}
				this.state = 84;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 85;
			this.match(stateMachineParser.T__7);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public transition(): TransitionContext {
		let _localctx: TransitionContext = new TransitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, stateMachineParser.RULE_transition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this.match(stateMachineParser.ID);
			this.state = 88;
			this.match(stateMachineParser.T__8);
			this.state = 89;
			this.match(stateMachineParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\r^\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
		"\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x05\x02\x17\n\x02\x03" +
		"\x02\x05\x02\x1A\n\x02\x03\x02\x07\x02\x1D\n\x02\f\x02\x0E\x02 \v\x02" +
		"\x03\x03\x03\x03\x07\x03$\n\x03\f\x03\x0E\x03\'\v\x03\x03\x03\x03\x03" +
		"\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x07\x050\n\x05\f\x05\x0E\x05" +
		"3\v\x05\x03\x05\x03\x05\x03\x06\x03\x06\x07\x069\n\x06\f\x06\x0E\x06<" +
		"\v\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x05\b" +
		"F\n\b\x03\b\x07\bI\n\b\f\b\x0E\bL\v\b\x03\b\x03\b\x03\t\x03\t\x03\t\x07" +
		"\tS\n\t\f\t\x0E\tV\v\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x02\x02" +
		"\x02\v\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x02\x02\x02]\x02\x14\x03\x02\x02\x02\x04!\x03\x02\x02\x02\x06*\x03\x02" +
		"\x02\x02\b-\x03\x02\x02\x02\n6\x03\x02\x02\x02\f?\x03\x02\x02\x02\x0E" +
		"B\x03\x02\x02\x02\x10O\x03\x02\x02\x02\x12Y\x03\x02\x02\x02\x14\x16\x05" +
		"\x04\x03\x02\x15\x17\x05\b\x05\x02\x16\x15\x03\x02\x02\x02\x16\x17\x03" +
		"\x02\x02\x02\x17\x19\x03\x02\x02\x02\x18\x1A\x05\n\x06\x02\x19\x18\x03" +
		"\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A\x1E\x03\x02\x02\x02\x1B\x1D\x05" +
		"\x0E\b\x02\x1C\x1B\x03\x02\x02\x02\x1D \x03\x02\x02\x02\x1E\x1C\x03\x02" +
		"\x02\x02\x1E\x1F\x03\x02\x02\x02\x1F\x03\x03\x02\x02\x02 \x1E\x03\x02" +
		"\x02\x02!%\x07\x03\x02\x02\"$\x05\x06\x04\x02#\"\x03\x02\x02\x02$\'\x03" +
		"\x02\x02\x02%#\x03\x02\x02\x02%&\x03\x02\x02\x02&(\x03\x02\x02\x02\'%" +
		"\x03\x02\x02\x02()\x07\x04\x02\x02)\x05\x03\x02\x02\x02*+\x07\f\x02\x02" +
		"+,\x07\f\x02\x02,\x07\x03\x02\x02\x02-1\x07\x05\x02\x02.0\x07\f\x02\x02" +
		"/.\x03\x02\x02\x0203\x03\x02\x02\x021/\x03\x02\x02\x0212\x03\x02\x02\x02" +
		"24\x03\x02\x02\x0231\x03\x02\x02\x0245\x07\x04\x02\x025\t\x03\x02\x02" +
		"\x026:\x07\x06\x02\x0279\x05\f\x07\x0287\x03\x02\x02\x029<\x03\x02\x02" +
		"\x02:8\x03\x02\x02\x02:;\x03\x02\x02\x02;=\x03\x02\x02\x02<:\x03\x02\x02" +
		"\x02=>\x07\x04\x02\x02>\v\x03\x02\x02\x02?@\x07\f\x02\x02@A\x07\f\x02" +
		"\x02A\r\x03\x02\x02\x02BC\x07\x07\x02\x02CE\x07\f\x02\x02DF\x05\x10\t" +
		"\x02ED\x03\x02\x02\x02EF\x03\x02\x02\x02FJ\x03\x02\x02\x02GI\x05\x12\n" +
		"\x02HG\x03\x02\x02\x02IL\x03\x02\x02\x02JH\x03\x02\x02\x02JK\x03\x02\x02" +
		"\x02KM\x03\x02\x02\x02LJ\x03\x02\x02\x02MN\x07\x04\x02\x02N\x0F\x03\x02" +
		"\x02\x02OP\x07\b\x02\x02PT\x07\t\x02\x02QS\x07\f\x02\x02RQ\x03\x02\x02" +
		"\x02SV\x03\x02\x02\x02TR\x03\x02\x02\x02TU\x03\x02\x02\x02UW\x03\x02\x02" +
		"\x02VT\x03\x02\x02\x02WX\x07\n\x02\x02X\x11\x03\x02\x02\x02YZ\x07\f\x02" +
		"\x02Z[\x07\v\x02\x02[\\\x07\f\x02\x02\\\x13\x03\x02\x02\x02\v\x16\x19" +
		"\x1E%1:EJT";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!stateMachineParser.__ATN) {
			stateMachineParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(stateMachineParser._serializedATN));
		}

		return stateMachineParser.__ATN;
	}

}

export class StateMachineContext extends ParserRuleContext {
	public eventList(): EventListContext {
		return this.getRuleContext(0, EventListContext);
	}
	public resetEventList(): ResetEventListContext | undefined {
		return this.tryGetRuleContext(0, ResetEventListContext);
	}
	public commandList(): CommandListContext | undefined {
		return this.tryGetRuleContext(0, CommandListContext);
	}
	public stateList(): StateListContext[];
	public stateList(i: number): StateListContext;
	public stateList(i?: number): StateListContext | StateListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StateListContext);
		} else {
			return this.getRuleContext(i, StateListContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return stateMachineParser.RULE_stateMachine; }
	// @Override
	public enterRule(listener: stateMachineListener): void {
		if (listener.enterStateMachine) {
			listener.enterStateMachine(this);
		}
	}
	// @Override
	public exitRule(listener: stateMachineListener): void {
		if (listener.exitStateMachine) {
			listener.exitStateMachine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stateMachineVisitor<Result>): Result {
		if (visitor.visitStateMachine) {
			return visitor.visitStateMachine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventListContext extends ParserRuleContext {
	public event(): EventContext[];
	public event(i: number): EventContext;
	public event(i?: number): EventContext | EventContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EventContext);
		} else {
			return this.getRuleContext(i, EventContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return stateMachineParser.RULE_eventList; }
	// @Override
	public enterRule(listener: stateMachineListener): void {
		if (listener.enterEventList) {
			listener.enterEventList(this);
		}
	}
	// @Override
	public exitRule(listener: stateMachineListener): void {
		if (listener.exitEventList) {
			listener.exitEventList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stateMachineVisitor<Result>): Result {
		if (visitor.visitEventList) {
			return visitor.visitEventList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(stateMachineParser.ID);
		} else {
			return this.getToken(stateMachineParser.ID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return stateMachineParser.RULE_event; }
	// @Override
	public enterRule(listener: stateMachineListener): void {
		if (listener.enterEvent) {
			listener.enterEvent(this);
		}
	}
	// @Override
	public exitRule(listener: stateMachineListener): void {
		if (listener.exitEvent) {
			listener.exitEvent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stateMachineVisitor<Result>): Result {
		if (visitor.visitEvent) {
			return visitor.visitEvent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResetEventListContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(stateMachineParser.ID);
		} else {
			return this.getToken(stateMachineParser.ID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return stateMachineParser.RULE_resetEventList; }
	// @Override
	public enterRule(listener: stateMachineListener): void {
		if (listener.enterResetEventList) {
			listener.enterResetEventList(this);
		}
	}
	// @Override
	public exitRule(listener: stateMachineListener): void {
		if (listener.exitResetEventList) {
			listener.exitResetEventList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stateMachineVisitor<Result>): Result {
		if (visitor.visitResetEventList) {
			return visitor.visitResetEventList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommandListContext extends ParserRuleContext {
	public command(): CommandContext[];
	public command(i: number): CommandContext;
	public command(i?: number): CommandContext | CommandContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommandContext);
		} else {
			return this.getRuleContext(i, CommandContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return stateMachineParser.RULE_commandList; }
	// @Override
	public enterRule(listener: stateMachineListener): void {
		if (listener.enterCommandList) {
			listener.enterCommandList(this);
		}
	}
	// @Override
	public exitRule(listener: stateMachineListener): void {
		if (listener.exitCommandList) {
			listener.exitCommandList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stateMachineVisitor<Result>): Result {
		if (visitor.visitCommandList) {
			return visitor.visitCommandList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommandContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(stateMachineParser.ID);
		} else {
			return this.getToken(stateMachineParser.ID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return stateMachineParser.RULE_command; }
	// @Override
	public enterRule(listener: stateMachineListener): void {
		if (listener.enterCommand) {
			listener.enterCommand(this);
		}
	}
	// @Override
	public exitRule(listener: stateMachineListener): void {
		if (listener.exitCommand) {
			listener.exitCommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stateMachineVisitor<Result>): Result {
		if (visitor.visitCommand) {
			return visitor.visitCommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateListContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(stateMachineParser.ID, 0); }
	public actionList(): ActionListContext | undefined {
		return this.tryGetRuleContext(0, ActionListContext);
	}
	public transition(): TransitionContext[];
	public transition(i: number): TransitionContext;
	public transition(i?: number): TransitionContext | TransitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TransitionContext);
		} else {
			return this.getRuleContext(i, TransitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return stateMachineParser.RULE_stateList; }
	// @Override
	public enterRule(listener: stateMachineListener): void {
		if (listener.enterStateList) {
			listener.enterStateList(this);
		}
	}
	// @Override
	public exitRule(listener: stateMachineListener): void {
		if (listener.exitStateList) {
			listener.exitStateList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stateMachineVisitor<Result>): Result {
		if (visitor.visitStateList) {
			return visitor.visitStateList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ActionListContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(stateMachineParser.ID);
		} else {
			return this.getToken(stateMachineParser.ID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return stateMachineParser.RULE_actionList; }
	// @Override
	public enterRule(listener: stateMachineListener): void {
		if (listener.enterActionList) {
			listener.enterActionList(this);
		}
	}
	// @Override
	public exitRule(listener: stateMachineListener): void {
		if (listener.exitActionList) {
			listener.exitActionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stateMachineVisitor<Result>): Result {
		if (visitor.visitActionList) {
			return visitor.visitActionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransitionContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(stateMachineParser.ID);
		} else {
			return this.getToken(stateMachineParser.ID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return stateMachineParser.RULE_transition; }
	// @Override
	public enterRule(listener: stateMachineListener): void {
		if (listener.enterTransition) {
			listener.enterTransition(this);
		}
	}
	// @Override
	public exitRule(listener: stateMachineListener): void {
		if (listener.exitTransition) {
			listener.exitTransition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stateMachineVisitor<Result>): Result {
		if (visitor.visitTransition) {
			return visitor.visitTransition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


