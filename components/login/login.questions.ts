import { expectCustomCommand } from "../../constants";
import LoginInteractions from "./login.interactions";

export default class LoginQuestions {


    private interactions = new LoginInteractions();

    /**
     * Método para obter o título do formulário de login
     * @returns Promise<string>
     */
    public async isLoginFormTitleEqualTo(expectedTitleLoginForm: string) {
        await expectCustomCommand.assertToEqualText(await this.interactions.getTextLblTitleLoginForm(), expectedTitleLoginForm, "O título do formulário de login não é igual ao esperado")
    }


}