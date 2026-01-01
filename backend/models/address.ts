export interface Address {
   name: string,
   street: string,
   city:  string,
   state: string,
   zipcode: string
};


export interface AddressBook {
   selectedAddress: number,

   addresss: Address[]
}
