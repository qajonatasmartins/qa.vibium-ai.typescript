import { clickCustomCommand, getTextCustomCommand, typeCustomCommand } from "../../constants";
import { loginComponents } from "./login.elements";

export default class LoginInteractions {

    private elements = loginComponents;

    /**
     * Método para clicar no botão [Signup] da tela de 'Signup/Login'
     * @returns Promise<void>
     */
    public async clickBtnSignupLogin() {
        await clickCustomCommand.click(this.elements.btnSignupSubmit)
    }

    /**
     * Método para preencher o campo [Name] da tela de 'Signup'
     * @param name - Nome a ser preenchido
     * @returns Promise<void>
     */
    public async typeInpSignupName(name: string) {
        await typeCustomCommand.type(this.elements.inpSignupName, name)
    }

    /**
     * Método para preencher o campo [Email] da tela de 'Signup'
     * @param email - Email a ser preenchido
     * @returns Promise<void>
     */
    public async typeInpSignupEmail(email: string) {
        await typeCustomCommand.type(this.elements.inpSignupEmail, email)
    }

    /**
     * Método para clicar no botão [Signup] da tela de 'Signup/Login'
     * @returns Promise<void>
     */
    public async clickBtnSignupSubmit() {
        await clickCustomCommand.click(this.elements.btnSignupSubmit)
    }

    /**
     * Método para obter o título do formulário de login
     * @returns Promise<string>
     */
    public async getTextLblTitleLoginForm() {
        return await getTextCustomCommand.getText(this.elements.lblTitleLoginForm)
    }

}