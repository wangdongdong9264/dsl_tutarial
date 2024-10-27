enum TokenTypes {
    TT_EVENT = "TT_EVENT",
    TT_RESET = "TT_RESET",
    TT_COMMANDS = "TT_COMMANDS",
    TT_END = "TT_END",
    TT_STATE = "TT_STATE",
    TT_ACTIONS = "TT_ACTIONS",
    TT_LEFT = "TT_LEFT",
    TT_RIGHT = "TT_RIGHT",
    TT_TRANSITION = "TT_TRANSITION",
    TT_IDENTIFIER = "TT_IDENTIFIER", // idertifier name
    TT_WHITESPACE = "TT_WHITESPACE",
    TT_COMMENT = "TT_COMMENT",
    TT_EOF = "TT_EOF"
}

/**
 * @description Token regex recognizer
 */
class ScanRecognizer {
    constructor(
        public tokenType: TokenTypes,
        public tokenPattern: RegExp,
        public outputToken: boolean
    ) {

    }
}

/**
 *  @description regex lexical parser
 */
class ScanPatterns {
    private TokenTypes = [
        // Keyword class 
        // event reset comands 
        // end state actions
        {
            type: TokenTypes.TT_EVENT,
            reg: "^events",
            out: true
        },
        {
            type: TokenTypes.TT_RESET,
            reg: "^resetEvents",
            out: true
        },
        {
            type: TokenTypes.TT_COMMANDS,
            reg: "^commands",
            out: true
        },
        {
            type: TokenTypes.TT_END,
            reg: "^end",
            out: true
        },
        {
            type: TokenTypes.TT_STATE,
            reg: "^state",
            out: true
        },
        {
            type: TokenTypes.TT_ACTIONS,
            reg: "^actions",
            out: true
        },
        // operators
        // { } =>
        {
            type: TokenTypes.TT_LEFT,
            reg: "^\\{",
            out: true
        },
        {
            type: TokenTypes.TT_RIGHT,
            reg: "^\\}",
            out: true
        },
        {
            type: TokenTypes.TT_TRANSITION,
            reg: "^=>",
            out: true
        },
        // identifiers id name
        {
            type: TokenTypes.TT_IDENTIFIER,
            reg: "^(\\w)+",
            out: true
        },
        // space
        {
            type: TokenTypes.TT_WHITESPACE,
            reg: "^(\\s)+",
            out: false
        },
        // note
        {
            type: TokenTypes.TT_COMMENT,
            reg: "^\\\\(.)*$",
            out: false
        },
        // end of file marker
        {
            type: TokenTypes.TT_EOF,
            reg: "^EOF",
            out: false
        },
    ]
    private patterMatchers: ScanRecognizer[] = [];
    /**
     *  @description configure the Token parser to generate the identifier
     */
    public loadPatterns() {
        this.TokenTypes.forEach(t => {
            this.patterMatchers.push(
                new ScanRecognizer(
                    t.type,
                    new RegExp(t.reg),
                    t.out
                )
            )
        })
        return this.patterMatchers;
    }
}

/**
 * @description Token 
 */
class Token {
    private token: TokenTypes
    private tokenValue: string

    constructor(token: TokenTypes, value: string) {
        this.token = token;
        this.tokenValue = value
    }

    public isTokenType(token:TokenTypes){
        return this.token == token
    }
    public getTokenValue(){
        return this.tokenValue;
    }
}

class StateMachineTokenizer {
    public scannerBuffer: string = ''; // string content to be parsed
    private tokenList: Token[] = [];  // parsing results 
    public recognizerPatterns: ScanRecognizer[] = [];  // array of regex recognizers callable by the parser

    constructor(input: string, patterns: ScanRecognizer[]) {
        this.scannerBuffer = input;
        this.recognizerPatterns = patterns;
    }

    public getTokenList() {
        return this.tokenList;
    }
    public startParser() {
        let parseInProgress = true;
        while (parseInProgress) {
            parseInProgress = this.matchToken(this.recognizerPatterns)
        }
    }

    private matchToken(patterns: ScanRecognizer[]) {
        let tokenMatch = false;
        // patterns of index
        let pIndex = 0;
        let recognizer: ScanRecognizer;
        let pattern: RegExp;
        let matcher;
        let result = true;

        do {
            recognizer = patterns[pIndex];  // get the current recognizer
            pattern = recognizer.tokenPattern; // get the regular expression of the current recognizer
            matcher = pattern.exec(this.scannerBuffer); // matching results

            if (matcher) {
                // console.log("matcher", matcher)
                // debugger
                if (recognizer.outputToken) {
                    this.tokenList.push(
                        new Token(recognizer.tokenType, matcher[0])
                    )
                }
                tokenMatch = true;
                // remove the matched parts from the input string
                let lastIndex = matcher[0]["length"];
                this.scannerBuffer = this.scannerBuffer.substring(lastIndex);
            }
            pIndex = pIndex + 1;
        } while (!tokenMatch && pIndex < patterns.length)

        if (!tokenMatch || pattern.lastIndex == this.scannerBuffer.length) {
            result = false;
        }

        return result;
    }
}

export {
    TokenTypes,
    ScanPatterns,
    ScanRecognizer,
    Token,
    StateMachineTokenizer
}

