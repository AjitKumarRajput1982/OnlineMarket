export class Carfuel {
    CarFuelID : number | null;
    CarFuelType :string | null;  

    constructor(CarFuelID : number | null = null,CarFuelType : string | null = null)
    {
        this.CarFuelID = CarFuelID;
        this.CarFuelType = CarFuelType;
    }
}

