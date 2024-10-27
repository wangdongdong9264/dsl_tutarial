class AbstractEvent{
    private name:string;
    private code:string;

    constructor(name:string,code:string){
        this.name = name;
        this.code = code;
    }

    public getName(){
        return this.name;
    }
    public getCode(){
        return this.code;
    }
}

class GEvent extends AbstractEvent{

}

class Command extends AbstractEvent{

}

class CommandChannel{
    public send(c:string){

    }
}

class Transition {
    private source:State;
    private target:State;
    private trigger:GEvent;

    constructor(
        source:State,
        trigger:GEvent,
        target:State
    ){
        this.source = source;
        this.target = target;
        this.trigger = trigger;
    }

    public getSource(){
        return this.source;
    }
    public getTarget(){
        return this.target;
    }
    public getTrigger(){
        return this.trigger
    }
    public getEventCode(){
        return this.trigger.getCode();
    }
}

class State {
    private name:string;
    private actions:Command[] = [];
    private transtions:Map<string,Transition> = new Map();
    
    constructor(name:string){
        this.name = name;
    }

    public addAction(command:Command){
        this.actions.push(command);
    }

    public addTransition(event:GEvent,target:State){
        this.transtions.set(event.getCode(), new Transition(this,event, target));
    }
    public getAllTargets(){
        let result:State[] = [];

        this.transtions.forEach(t => {
            result.push(t.getTarget())
        });
        return result;
    }
    public hasTransition(eventCode:string){
        return this.transtions.has(eventCode)
    }
    public targetState(eventCode:string){
        return this.transtions.get(eventCode)?.getTarget()
    }
    public executeActions(commands:CommandChannel){
        this.actions.forEach(a => {
            commands.send(a.getCode());
        })
    }
}




class StateMachine{
    private start:State;
    constructor(start:State){
        this.start = start;
    }

    private collectStates(result:State[],s:State){
        if(result.indexOf(s) > -1){
            return;
        }
        result.push(s);
        //从s计算可以转换到的状态
        result = result.concat(s.getAllTargets());
    }
    
    public getStates(){
        let result:State[] = [];
        return this.collectStates(result,this.start);
        return result;
    }

    private resetEvents:GEvent[] = [];

    public addResetEvents(...events:GEvent[]){
        this.resetEvents = this.resetEvents.concat(events);
    }
    private resetEventCodes(){
        let result:string[] = [];
        this.resetEvents.forEach(r => {
            result.push(r.getCode())
        })
        return result;
    }
    public isResetEvent(eventCode:string){
        return this.resetEventCodes().indexOf(eventCode) > -1;
    }

}

export {
    GEvent,
    Command,
    State,
    StateMachine
}

// the above is called semantic model in dsl
