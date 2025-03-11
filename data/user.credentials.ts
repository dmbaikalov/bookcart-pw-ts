import {
    randFirstName,
    randLastName,
    randUserName,
    randPassword,
    randFullName,
    randStreetAddress,
    randState,
} from "@ngneat/falso";

interface UserCredentials {
    firstname?: string;
    lastname?: string;
    username: string;
    password: string | string[];
}

interface CheckOutData {
    name: string;
    addressLine1: string;
    addressLine2: string;
    pincode: string;
    state: string;
}

export const loginData: UserCredentials = {
    username: "test-user123",
    password: "Password123",
};

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
