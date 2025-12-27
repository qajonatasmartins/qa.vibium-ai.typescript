export interface ISingup {
    name: string;
    email: string;
}

export enum CountryType {
    India = 'India',
    UnitedStates = 'United States',
    Canada = 'Canada',
    Australia = 'Australia',
    Israel = 'Israel',
    NewZealand = 'New Zealand',
    Singapore = 'Singapore'
}

export interface ISingupRegisterData extends ISingup {
    password: string;
    birthDay: string;
    birthMonth: string;
    birthYear: string;
    newsletter: boolean;
    offers: boolean;
    firstName: string;
    lastName: string;
    company: string;
    address1: string;
    address2: string;
    country: CountryType;
    state: string;
    city: string;
    zipcode: string;
    mobileNumber: string
}