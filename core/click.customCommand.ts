import { vibe } from "../constants";

export default class ClickCustomCommand {

    /**
     * Método para clicar em um elemento com Vibium
     * @param element - Seletor do elemento a ser clicado
     * @returns Promise<void>
     */
    public async click(element: string) {
        await vibe.find(element).click()
    }
}