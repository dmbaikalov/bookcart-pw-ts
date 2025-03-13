import {
    randFirstName,
    randLastName,
    randUserName,
    randPassword,
    randFullName,
    randStreetAddress,
    randState,
} from "@ngneat/falso";

export interface UserCredentials {
    firstname?: string;
    lastname?: string;
    username: string;
    password: string | string[];
}

export interface CheckOutData {
    name: string;
    addressLine1: string;
    addressLine2: string;
    pincode: string;
    state: string;
}

export const checkoutData: CheckOutData = {
    name: randFullName(),
    addressLine1: randStreetAddress(),
    addressLine2: randStreetAddress(),
    pincode: "123456",
    state: randState(),
};

export const randomUserData: UserCredentials = {
    firstname: randFirstName(),
    lastname: randLastName(),
    username: randUserName(),
    password: randPassword(),
};
