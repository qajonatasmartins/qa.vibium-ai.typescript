import { ISingupRegisterData } from "../../../interface/login/ISingup.interface";
import SignupInteractions from "./signup.interactions";

export default class SignupActions {

    private interactions = new SignupInteractions();

    /**
     * Método para iniciar o processo de registro de signup para o gênero [Mr] masculino
     * @param singupData - Dados de signup
     * @returns Promise<void>
     */
    public async singupMr(singupData: ISingupRegisterData) {
        await this.interactions.clickInpSignupGenderMr()
        await this.registerSignupData(singupData);
    }

    /**
     * Método para iniciar o processo de registro de signup para o gênero [Mrs] feminino
     * @param singupData - Dados de signup
     * @returns Promise<void>
     */
    public async singupMrs(singupData: ISingupRegisterData) {
        await this.interactions.clickInpSignupGenderMrs()
        await this.registerSignupData(singupData);
    }

    /**
     * Método para iniciar o processo de registro de signup
     * @param singupData - Dados de signup
     * @returns Promise<void>
     */
    public async registerSignupData(singupData: ISingupRegisterData) {
        await this.interactions.typeInpPassword(singupData.password);
        await this.informBirthday(singupData);
        await this.checkTermsAndNewsletter();
        await this.informName(singupData);
        await this.informAddress(singupData);
        await this.interactions.typeInpMobileNumber(singupData.mobileNumber);
        await this.interactions.clickBtnCreateAccount();
    }

    /**
     * Método para informar o nome do usuário
     * @param singupData - Dados de signup
     * @returns Promise<void>
     */
    public async informName(singupData: ISingupRegisterData) {
        await this.interactions.typeInpFirstName(singupData.firstName);
        await this.interactions.typeInpLastName(singupData.lastName);
    }

    /**
     * Método para marcar os termos e newsletter
     * @returns Promise<void>
     */
    public async checkTermsAndNewsletter() {
        await this.interactions.clickChkNewsletter();
        await this.interactions.clickChkOffers();
    }

    /**
     * Método para informar o endereço do usuário
     * @param singupData - Dados de signup
     * @returns Promise<void>
     */
    public async informAddress(singupData: ISingupRegisterData) {
        await this.interactions.typeInpCompany(singupData.company);
        await this.interactions.typeInpAddress1(singupData.address1);
        await this.interactions.typeInpAddress2(singupData.address2);
        await this.interactions.typeInpCountry(singupData.country);
        await this.interactions.typeInpState(singupData.state);
        await this.interactions.typeInpCity(singupData.city);
        await this.interactions.typeInpZipcode(singupData.zipcode);
    }

    /**
     * Método para informar o dia, mês e ano de nascimento do usuário
     * @param singupData - Dados de signup
     * @returns Promise<void>
     */
    public async informBirthday(singupData: ISingupRegisterData) {
        await this.interactions.typeDdlBirthDay(singupData.birthDay);
        await this.interactions.typeDdlBirthMonth(singupData.birthMonth);
        await this.interactions.typeDdlBirthYear(singupData.birthYear);
    }
}