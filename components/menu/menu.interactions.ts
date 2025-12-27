import { menuComponents } from "./menu.elements";
import { clickCustomCommand } from "../../constants";

export default class MenuInteractions {

    private elements = menuComponents;

    /**
     * Método para clicar no botão [Home] da tela de menu
     * @returns Promise<void>
     */
    public async clickHomeMenu() {
        await clickCustomCommand.click(this.elements.btnHomeMenu)
    }

    /**
     * Método para clicar no botão [Products] da tela de menu
     * @returns Promise<void>
     */
    public async clickProductsMenu() {
        await clickCustomCommand.click(this.elements.btnProductsMenu)
    }

    /**
     * Método para clicar no botão [Cart] da tela de menu
     * @returns Promise<void>       
     */
    public async clickCartMenu() {
        await clickCustomCommand.click(this.elements.btnCartMenu)
    }

    /**
     * Método para clicar no botão [Signup/Login] da tela de menu
     * @returns Promise<void>
     */
    public async clickSignupLoginMenu() {
        await clickCustomCommand.click(this.elements.btnSignupLoginMenu)
    }
}