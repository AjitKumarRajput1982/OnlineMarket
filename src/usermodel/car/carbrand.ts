export class Carbrand {
    CarBrandID : number | null;
    CarBrandName :string | null;  

    constructor(CarBrandID : number | null = null, CarBrandName : string | null = null)
    {
        this.CarBrandID = CarBrandID;
        this.CarBrandName = CarBrandName;
    }
}
