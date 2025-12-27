import {
    baseCustomCommand, clickCustomCommand,
    expectCustomCommand, getTextCustomCommand
} from "../../constants";
import { menuComponents } from "../../components/menu/menu.elements";
import { loginComponents } from "../../components/login/login.elements";
import { ct001 } from "../../data/login/login.data";

describe(`${process.env.PRODUCT_NAME}`, () => {

    context(`${process.env.PRODUCT_NAME} - Login/Signup`, () => {

        before('Navigate to the login page', async () => {
            await baseCustomCommand.navigateTo(process.env.BASE_URL!)
        })

        it(`[CT-001] - Login/Signup - Validate title login form`, async () => {
            await clickCustomCommand.click(menuComponents.btnSignupLoginMenu)
            await expectCustomCommand.expect(ct001.titleLoginForm, await getTextCustomCommand.getText(loginComponents.txtTitleLoginForm))
        });

        after('Finish test execution', async () => {
            await baseCustomCommand.finishTestExecution()
        })
    })


});