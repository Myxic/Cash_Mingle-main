export class User{
    firstName : String ;
    lastName : String;
    accountNumber: String;
    accountBalance : BigInt;
    constructor(field: any) {
        for (let f of field) {
          f = field[f];
        }
      }
}
export interface User{
    firstName: String ,
    lastName : String;
}