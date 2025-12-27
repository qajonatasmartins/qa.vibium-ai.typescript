import { vibe } from "../constants";

export default class BaseCustomCommand {

    /**
     * Método para navegar para uma URL
     * @param url - URL a ser navegada
     * @returns Promise<void>
     */
    public async navigateTo(url: string) {
        await vibe.go(url)
    }

    /**
     * Método para fechar o navegador
     * @returns Promise<void>
     */
    public async finishTestExecution() {
        await vibe.quit()
    }
}