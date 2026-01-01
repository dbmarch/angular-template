import {Schema, model, type HydratedDocument, Model, Types} from 'mongoose';
import {type Address} from './address.ts'

const addressSchema = new Schema<Address> ({
   name: { type:  String, required: true},
   street: { type: String, required: true},
   city: { type: String, required: true},
   state: { type: String, required: true},
   zipcode: { type: String}
});

export const Address = model<Address>('Address', addressSchema);
export type AddressDocument = HydratedDocument<Address>;
