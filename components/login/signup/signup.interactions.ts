import { clickCustomCommand, typeCustomCommand } from "../../../constants";
import { signupComponents } from "./signup.elements";

export default class SignupInteractions {

    private elements = signupComponents;

    /**
     * Método para selecionar o gênero [Mr] da tela de signup
     * @returns Promise<void>
     */
    public async clickInpSignupGenderMr() {
        await clickCustomCommand.click(this.elements.inpSignupGenderMr)
    }

    /**
     * Método para selecionar o gênero [Mrs] da tela de signup
     * @returns Promise<void>
     */
    public async clickInpSignupGenderMrs() {
        await clickCustomCommand.click(this.elements.inpSignupGenderMrs)
    }

    /**
     * Método para preencher o campo [Password] da tela de signup
     * @param password - Senha a ser preenchida
     * @returns Promise<void>
     */
    public async typeInpPassword(password: string) {
        await typeCustomCommand.type(this.elements.inpPassword, password)
    }

    /**
     * Método para preencher o campo [Day] da tela de signup
     * @returns Promise<void>
     */
    public async typeDdlBirthDay(day: string) {
        await typeCustomCommand.type(this.elements.ddlBirthDay, day)
    }

    /**
     * Método para preencher o campo [Month] da tela de signup
     * @returns Promise<void>
     */
    public async typeDdlBirthMonth(month: string) {
        await typeCustomCommand.type(this.elements.ddlBirthMonth, month)
    }

    /**
     * Método para preencher o campo [Year] da tela de signup
     * @returns Promise<void>
     */
    public async typeDdlBirthYear(year: string) {
        await typeCustomCommand.type(this.elements.ddlBirthYear, year)
    }

    /**
     * Método para clicar no checkbox [Newsletter] da tela de signup
     * @returns Promise<void>
     */
    public async clickChkNewsletter() {
        await clickCustomCommand.click(this.elements.chkNewsletter)
    }

    /**
     * Método para clicar no checkbox [Offers] da tela de signup
     * @returns Promise<void>
     */
    public async clickChkOffers() {
        await clickCustomCommand.click(this.elements.chkOffers)
    }

    /**
     * Método para preencher o campo [First Name] da tela de signup
     * @param firstName - First Name a ser preenchido
     * @returns Promise<void>
     */
    public async typeInpFirstName(firstName: string) {
        await typeCustomCommand.type(this.elements.inpFirstName, firstName)
    }

    /**
     * Método para preencher o campo [Last Name] da tela de signup
     * @param lastName - Last Name a ser preenchido
     * @returns Promise<void>
     */
    public async typeInpLastName(lastName: string) {
        await typeCustomCommand.type(this.elements.inpLastName, lastName)
    }

    /**
     * Método para preencher o campo [Company] da tela de signup
     * @param company - Company a ser preenchido
     * @returns Promise<void>
     */
    public async typeInpCompany(company: string) {
        await typeCustomCommand.type(this.elements.inpCompany, company)
    }

    /**
     * Método para preencher o campo [Address 1] da tela de signup
     * @param address1 - Address 1 a ser preenchido
     * @returns Promise<void>
     */
    public async typeInpAddress1(address1: string) {
        await typeCustomCommand.type(this.elements.inpAddress1, address1)
    }

    /**
     * Método para preencher o campo [Address 2] da tela de signup
     * @param address2 - Address 2 a ser preenchido
     * @returns Promise<void>
     */
    public async typeInpAddress2(address2: string) {
        await typeCustomCommand.type(this.elements.inpAddress2, address2)
    }

    /**
     * Método para preencher o campo [Country] da tela de signup
     * @param country - Country a ser preenchido
     * @returns Promise<void>
     */
    public async typeInpCountry(country: string) {
        await typeCustomCommand.type(this.elements.inpCountry, country)
    }

    /**
     * Método para preencher o campo [State] da tela de signup
     * @param state - State a ser preenchido
     * @returns Promise<void>
     */
    public async typeInpState(state: string) {
        await typeCustomCommand.type(this.elements.inpState, state)
    }

    /**
     * Método para preencher o campo [City] da tela de signup
     * @param city - City a ser preenchido
     * @returns Promise<void>
     */
    public async typeInpCity(city: string) {
        await typeCustomCommand.type(this.elements.inpCity, city)
    }

    /**
     * Método para preencher o campo [Zipcode] da tela de signup
     * @param zipcode - Zipcode a ser preenchido
     * @returns Promise<void>
     */
    public async typeInpZipcode(zipcode: string) {
        await typeCustomCommand.type(this.elements.inpZipcode, zipcode)
    }

    /**
     * Método para preencher o campo [Mobile Number] da tela de signup
     * @param mobileNumber - Mobile Number a ser preenchido
     * @returns Promise<void>
     */
    public async typeInpMobileNumber(mobileNumber: string) {
        await typeCustomCommand.type(this.elements.inpMobileNumber, mobileNumber)
    }

    /**
     * Método para clicar no botão [Create Account] da tela de signup
     * @returns Promise<void>
     */
    public async clickBtnCreateAccount() {
        await clickCustomCommand.click(this.elements.btnCreateAccount)
    }
}