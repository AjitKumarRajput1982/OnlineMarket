export class State {
    StateID : number | null;
    StateName :string | null;  

    constructor(StateID : number | null = null,StateName :string | null = null)
    {
        this.StateID = StateID;
        this.StateName = StateName;
    }
}
