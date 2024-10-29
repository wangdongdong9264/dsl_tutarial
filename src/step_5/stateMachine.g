grammar stateMachine;
// syntax
stateMachine : eventList resetEventList? commandList? stateList*;

eventList : 'events' event* 'end';
event : ID ID;

resetEventList : 'resetEvents' ID* 'end';

commandList : 'commands' command* 'end';
command : ID ID;

stateList : 'state' ID actionList? transition* 'end';
actionList : 'actions' '{' ID* '}';
transition : ID '=>' ID;

// lexical
fragment LETTER : [a-zA-Z\-];
fragment DIGIT : [0-9];
ID : LETTER (LETTER | DIGIT)*;

WS : (' '| '\t' | '\r' | '\n')+ -> skip;