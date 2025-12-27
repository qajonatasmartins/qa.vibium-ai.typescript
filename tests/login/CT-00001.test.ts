import {
    baseCustomCommand, loginQuestions, menuActions
} from "../../constants";
import { ct00001 } from "../../data/login/login.data";

describe.skip(`${process.env.PRODUCT_NAME}`, () => {

    context(`${process.env.PRODUCT_NAME} - Login/Signup`, () => {

        before('Navegar para a página de login', async () => {
            await baseCustomCommand.navigateTo(process.env.BASE_URL!)
        })

        it('[CT-00001] - Login/Signup - Validar o título do formulário de login', async () => {
            await menuActions.openSignupLoginPage()
            await loginQuestions.isLoginFormTitleEqualTo(ct00001.titleLoginForm)
        });

        after('Finalizar execução do teste', async () => {
            await baseCustomCommand.finishTestExecution()
        })
    })


});