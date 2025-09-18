export class Carnoofowner {
    CarNoOfOwnerID : number | null;
    CarNoOfOwnerType :string | null;  

    constructor(CarNoOfOwnerID : number | null = null,CarNoOfOwnerType : string | null = null)
    {
        this.CarNoOfOwnerID = CarNoOfOwnerID;
        this.CarNoOfOwnerType = CarNoOfOwnerType;
    }
}
