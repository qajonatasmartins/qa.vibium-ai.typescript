import { CountryType, ISingupRegisterData } from "../../../interface/login/ISingup.interface";
import { faker } from "@faker-js/faker";

export default class RegisterSignupBuilder {

    private registerSignupData: ISingupRegisterData;

    constructor() {
        this.registerSignupData = {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            birthDay: faker.date.birthdate().getDate().toString(),
            birthMonth: faker.date.birthdate().getMonth().toString(),
            birthYear: faker.date.birthdate().getFullYear().toString(),
            newsletter: faker.datatype.boolean(),
            offers: faker.datatype.boolean(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            company: faker.company.name(),
            address1: faker.location.streetAddress(),
            address2: faker.location.secondaryAddress(),
            country: faker.helpers.arrayElement([CountryType.India, CountryType.UnitedStates, CountryType.Canada, CountryType.Australia, CountryType.Israel, CountryType.NewZealand, CountryType.Singapore]),
            state: faker.location.state(),
            city: faker.location.city(),
            zipcode: faker.location.zipCode(),
            mobileNumber: faker.phone.number(),
        }
    }

    /**
     * Método para criar um novo builder de registro de signup
     * @returns RegisterSignupBuilder
     */
    anRegisterSignup(): RegisterSignupBuilder {
        return new RegisterSignupBuilder()
    }

    /**
     * Método para definir o nome do usuário
     * @param name - Nome do usuário
     * @returns RegisterSignupBuilder
     */
    withName(name: string): RegisterSignupBuilder {
        this.registerSignupData.name = name
        return this
    }

    /**
     * Método para definir o email do usuário
     * @param email - Email do usuário
     * @returns RegisterSignupBuilder
     */
    withEmail(email: string): RegisterSignupBuilder {
        this.registerSignupData.email = email
        return this
    }

    /**
     * Método para definir a senha do usuário
     * @param password - Senha do usuário
     * @returns RegisterSignupBuilder
     */
    withPassword(password: string): RegisterSignupBuilder {
        this.registerSignupData.password = password
        return this
    }

    /** */
    withBirthDay(birthDay: string): RegisterSignupBuilder {
        this.registerSignupData.birthDay = birthDay
        return this
    }

    /**
     * Método para definir o dia de nascimento do usuário
     * @param birthDay - Dia de nascimento do usuário
     * @returns RegisterSignupBuilder
     */
    withBirthMonth(birthMonth: string): RegisterSignupBuilder {
        this.registerSignupData.birthMonth = birthMonth
        return this
    }

    /**
     * Método para definir o ano de nascimento do usuário
     * @param birthYear - Ano de nascimento do usuário
     * @returns RegisterSignupBuilder
     */
    withBirthYear(birthYear: string): RegisterSignupBuilder {
        this.registerSignupData.birthYear = birthYear
        return this
    }

    /**
     * Método para definir se o usuário deseja receber o newsletter
     * @param newsletter - Se o usuário deseja receber o newsletter
     * @returns RegisterSignupBuilder
     */
    withNewsletter(newsletter: boolean): RegisterSignupBuilder {
        this.registerSignupData.newsletter = newsletter
        return this
    }

    /**
     * Método para definir se o usuário deseja receber as ofertas
     * @param offers - Se o usuário deseja receber as ofertas
     * @returns RegisterSignupBuilder
     */
    withOffers(offers: boolean): RegisterSignupBuilder {
        this.registerSignupData.offers = offers
        return this
    }

    /**
     * Método para definir o nome do usuário
     * @param firstName - Nome do usuário
     * @returns RegisterSignupBuilder
     */
    withFirstName(firstName: string): RegisterSignupBuilder {
        this.registerSignupData.firstName = firstName
        return this
    }

    /**
     * Método para definir o sobrenome do usuário
     * @param lastName - Sobrenome do usuário
     * @returns RegisterSignupBuilder
     */
    withLastName(lastName: string): RegisterSignupBuilder {
        this.registerSignupData.lastName = lastName
        return this
    }

    /**
     * Método para definir a empresa do usuário
     * @param company - Empresa do usuário
     * @returns RegisterSignupBuilder
     */
    withCompany(company: string): RegisterSignupBuilder {
        this.registerSignupData.company = company
        return this
    }
    /**
     * Método para definir o endereço do usuário
     * @param address1 - Endereço do usuário
     * @returns RegisterSignupBuilder
     */
    withAddress1(address1: string): RegisterSignupBuilder {
        this.registerSignupData.address1 = address1
        return this
    }

    /**
     * Método para definir o endereço do usuário
     * @param address2 - Endereço do usuário
     * @returns RegisterSignupBuilder
     */
    withAddress2(address2: string): RegisterSignupBuilder {
        this.registerSignupData.address2 = address2
        return this
    }

    /**
     * Método para definir o país do usuário
     * @param country - País do usuário
     * @returns RegisterSignupBuilder
     */
    withCountry(country: CountryType): RegisterSignupBuilder {
        this.registerSignupData.country = country
        return this
    }

    /**
     * Método para definir o estado do usuário
     * @param state - Estado do usuário
     * @returns RegisterSignupBuilder
     */
    withState(state: string): RegisterSignupBuilder {
        this.registerSignupData.state = state
        return this
    }

    /**
     * Método para definir a cidade do usuário
     * @param city - Cidade do usuário
     * @returns RegisterSignupBuilder
     */
    withCity(city: string): RegisterSignupBuilder {
        this.registerSignupData.city = city
        return this
    }

    /**
     * Método para definir o CEP do usuário
     * @param zipcode - CEP do usuário
     * @returns RegisterSignupBuilder
     */
    withZipcode(zipcode: string): RegisterSignupBuilder {
        this.registerSignupData.zipcode = zipcode
        return this
    }

    /**
     * Método para definir o número de telefone do usuário
     * @param mobileNumber - Número de telefone do usuário
     * @returns RegisterSignupBuilder
     */
    withMobileNumber(mobileNumber: string): RegisterSignupBuilder {
        this.registerSignupData.mobileNumber = mobileNumber
        return this
    }

    /**
     * Método para construir os dados de registro de signup
     * @returns ISingupRegisterData
     */
    build(): ISingupRegisterData {
        return this.registerSignupData
    }
}