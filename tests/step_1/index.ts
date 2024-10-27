import { Command, GEvent, State, StateMachine } from "step_1";

// the following is a call based on the semantic model

let doorClosed = new GEvent("doorClosed","D1CL");
let drawerOpened = new GEvent("drawerOpened","D2OP");
let lightOn = new GEvent("lightOn","L1ON");
let doorOpened = new GEvent("doorOpened","D1OP");
let pannelClosed = new GEvent("panelClosed","PNCL");

let unlockPanelCmd = new Command("unlockPanel","PNUL");
let lockPanelCmd = new Command("lockPanel","PNLK");
let lockDoorCmd = new Command("lockDoor","D1LK");
let unlockDoorCmd = new Command("unlockDoor","D1UL");

let idle = new State("idle");
let activeState = new State("active");
let waitingForlightState = new State("waitingForLight");
let waitingForDrawerState = new State("waitingForDrawer");
let unlockPanelState= new State("unlockPanelState");

// state machine
let machine = new StateMachine(idle);
idle.addTransition(doorClosed,activeState);
idle.addAction(unlockDoorCmd);
idle.addAction(lockPanelCmd);

activeState.addTransition(drawerOpened,waitingForlightState);
activeState.addTransition(lightOn,waitingForDrawerState);

waitingForlightState.addTransition(lightOn,unlockPanelState);
waitingForDrawerState.addTransition(drawerOpened,unlockPanelState);

unlockPanelState.addAction(unlockPanelCmd);
unlockPanelState.addAction(lockDoorCmd);
unlockPanelState.addTransition(pannelClosed,idle);

machine.addResetEvents(doorOpened);
