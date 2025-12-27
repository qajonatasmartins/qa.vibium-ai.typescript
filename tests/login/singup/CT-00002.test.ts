import {
    baseCustomCommand, registerSignupBuilder, singupFlows
} from "../../../constants";
import type { ISingupRegisterData } from "../../../interface/login/ISingup.interface";

describe(`${process.env.PRODUCT_NAME}`, () => {

    let signupData: ISingupRegisterData

    context(`${process.env.PRODUCT_NAME} - Login/Signup`, () => {

        before('Navegar para a página de login', async () => {
            await baseCustomCommand.navigateTo(process.env.BASE_URL!)
            signupData = await registerSignupBuilder.anRegisterSignup().build()
        })

        it('[CT-00002] - Login/Signup - Validar o processo de signup', async () => {
            await singupFlows.openSignupPageAndRegisterSignupMr(signupData)

        });
    })
});