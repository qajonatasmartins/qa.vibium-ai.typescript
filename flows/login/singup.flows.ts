
import { loginActions, menuActions } from "../../constants";
import { ISingupRegisterData } from "../../interface/login/ISingup.interface";

export default class SingupFlows {

    /**
     * Método para abrir a página de login/signup e iniciar o processo de registro de signup
     * @param signupData - Dados de signup
     * @returns Promise<void>
     */
    public async openSignupPageAndSignupStart(signupData: ISingupRegisterData) {
        await menuActions.openSignupLoginPage();
        await loginActions.signupStart(signupData);
    }

    /**
     * Método para abrir a página de login/signup e iniciar o processo de registro de signup para o gênero [Mr] masculino
     * @param signupData - Dados de signup
     * @returns Promise<void>
     */
    public async openSignupPageAndRegisterSignupMr(signupData: ISingupRegisterData) {
        await this.openSignupPageAndSignupStart(signupData);
        await loginActions.singupActions().singupMr(signupData);
    }

    /**
     * Método para abrir a página de login/signup e iniciar o processo de registro de signup para o gênero [Mrs] feminino
     * @param signupData - Dados de signup
     * @returns Promise<void>
     */
    public async openSignupPageAndRegisterSignupMrs(signupData: ISingupRegisterData) {
        await this.openSignupPageAndSignupStart(signupData);
        await loginActions.singupActions().singupMrs(signupData);
    }
}