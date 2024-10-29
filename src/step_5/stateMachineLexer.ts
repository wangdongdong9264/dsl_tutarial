// Generated from src/step_5/stateMachine.g by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class stateMachineLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"LETTER", "DIGIT", "ID", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'events'", "'end'", "'resetEvents'", "'commands'", "'state'", 
		"'actions'", "'{'", "'}'", "'=>'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "ID", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(stateMachineLexer._LITERAL_NAMES, stateMachineLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return stateMachineLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(stateMachineLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "stateMachine.g"; }

	// @Override
	public get ruleNames(): string[] { return stateMachineLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return stateMachineLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return stateMachineLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return stateMachineLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\re\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03" +
		"\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\r\x07\rZ\n\r\f\r\x0E\r]\v\r\x03\x0E" +
		"\x06\x0E`\n\x0E\r\x0E\x0E\x0Ea\x03\x0E\x03\x0E\x02\x02\x02\x0F\x03\x02" +
		"\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11" +
		"\x02\n\x13\x02\v\x15\x02\x02\x17\x02\x02\x19\x02\f\x1B\x02\r\x03\x02\x05" +
		"\x05\x02//C\\c|\x03\x022;\x05\x02\v\f\x0F\x0F\"\"\x02e\x02\x03\x03\x02" +
		"\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02" +
		"\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02" +
		"\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x19\x03\x02\x02" +
		"\x02\x02\x1B\x03\x02\x02\x02\x03\x1D\x03\x02\x02\x02\x05$\x03\x02\x02" +
		"\x02\x07(\x03\x02\x02\x02\t4\x03\x02\x02\x02\v=\x03\x02\x02\x02\rC\x03" +
		"\x02\x02\x02\x0FK\x03\x02\x02\x02\x11M\x03\x02\x02\x02\x13O\x03\x02\x02" +
		"\x02\x15R\x03\x02\x02\x02\x17T\x03\x02\x02\x02\x19V\x03\x02\x02\x02\x1B" +
		"_\x03\x02\x02\x02\x1D\x1E\x07g\x02\x02\x1E\x1F\x07x\x02\x02\x1F \x07g" +
		"\x02\x02 !\x07p\x02\x02!\"\x07v\x02\x02\"#\x07u\x02\x02#\x04\x03\x02\x02" +
		"\x02$%\x07g\x02\x02%&\x07p\x02\x02&\'\x07f\x02\x02\'\x06\x03\x02\x02\x02" +
		"()\x07t\x02\x02)*\x07g\x02\x02*+\x07u\x02\x02+,\x07g\x02\x02,-\x07v\x02" +
		"\x02-.\x07G\x02\x02./\x07x\x02\x02/0\x07g\x02\x0201\x07p\x02\x0212\x07" +
		"v\x02\x0223\x07u\x02\x023\b\x03\x02\x02\x0245\x07e\x02\x0256\x07q\x02" +
		"\x0267\x07o\x02\x0278\x07o\x02\x0289\x07c\x02\x029:\x07p\x02\x02:;\x07" +
		"f\x02\x02;<\x07u\x02\x02<\n\x03\x02\x02\x02=>\x07u\x02\x02>?\x07v\x02" +
		"\x02?@\x07c\x02\x02@A\x07v\x02\x02AB\x07g\x02\x02B\f\x03\x02\x02\x02C" +
		"D\x07c\x02\x02DE\x07e\x02\x02EF\x07v\x02\x02FG\x07k\x02\x02GH\x07q\x02" +
		"\x02HI\x07p\x02\x02IJ\x07u\x02\x02J\x0E\x03\x02\x02\x02KL\x07}\x02\x02" +
		"L\x10\x03\x02\x02\x02MN\x07\x7F\x02\x02N\x12\x03\x02\x02\x02OP\x07?\x02" +
		"\x02PQ\x07@\x02\x02Q\x14\x03\x02\x02\x02RS\t\x02\x02\x02S\x16\x03\x02" +
		"\x02\x02TU\t\x03\x02\x02U\x18\x03\x02\x02\x02V[\x05\x15\v\x02WZ\x05\x15" +
		"\v\x02XZ\x05\x17\f\x02YW\x03\x02\x02\x02YX\x03\x02\x02\x02Z]\x03\x02\x02" +
		"\x02[Y\x03\x02\x02\x02[\\\x03\x02\x02\x02\\\x1A\x03\x02\x02\x02][\x03" +
		"\x02\x02\x02^`\t\x04\x02\x02_^\x03\x02\x02\x02`a\x03\x02\x02\x02a_\x03" +
		"\x02\x02\x02ab\x03\x02\x02\x02bc\x03\x02\x02\x02cd\b\x0E\x02\x02d\x1C" +
		"\x03\x02\x02\x02\x06\x02Y[a\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!stateMachineLexer.__ATN) {
			stateMachineLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(stateMachineLexer._serializedATN));
		}

		return stateMachineLexer.__ATN;
	}

}

