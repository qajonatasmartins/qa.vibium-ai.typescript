import LoginInteractions from "./login.interactions";
import type { ISingup } from "../../interface/login/ISingup.interface";
import SignupActions from "./signup/signup.actions";

export default class LoginActions {

    private interactions = new LoginInteractions();

    /**
     * Método para retornar a instância de SignupActions
     * @returns SignupActions
     */
    public singupActions() {
        return new SignupActions();
    }

    /**
     * Método para iniciar o processo de registro de signup
     * @param signupData - Dados de signup
     * @returns Promise<void>
     */
    public async signupStart(signupData: ISingup) {
        await this.interactions.clickBtnSignupLogin()
        await this.interactions.typeInpSignupName(signupData.name)
        await this.interactions.typeInpSignupEmail(signupData.email)
        await this.interactions.clickBtnSignupSubmit()
    }

}