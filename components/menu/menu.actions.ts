import MenuInteractions from "./menu.interactions";

export default class MenuActions {

    private interactions = new MenuInteractions();

    /**
     * Método para clicar no botão [Home] da tela de menu
     * @returns Promise<void>
     */
    public async openHomePage() {
        await this.interactions.clickHomeMenu()
    }

    /**
     * Método para clicar no botão [Products] da tela de menu
     * @returns Promise<void>
     */
    public async openProductsPage() {
        await this.interactions.clickProductsMenu()
    }

    /**
     * Método para clicar no botão [Cart] da tela de menu
     * @returns Promise<void>
     */
    public async openCartPage() {
        await this.interactions.clickCartMenu()
    }

    /**
     * Método para clicar no botão [Signup/Login] da tela de menu
     * @returns Promise<void>   
     */
    public async openSignupLoginPage() {
        await this.interactions.clickSignupLoginMenu()
    }
}