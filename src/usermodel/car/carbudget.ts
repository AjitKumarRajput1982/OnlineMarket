export class Carbudget {
    CarBudgetID : number | null;
    CarBudget :string  | null; 

    constructor(CarBudgetID : number | null = null,CarBudget : string | null = null)
    {
        this.CarBudgetID = CarBudgetID;
        this.CarBudget = CarBudget;
    }
}
