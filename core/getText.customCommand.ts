import { vibe } from "../constants";

export default class GetTextCustomCommand {

    /**
     * Método para obter o texto de um elemento com Vibium
     * @param element - Seletor do elemento a ser obtido
     * @returns Promise<string>
     */
    public async getText(element: string) {
        return await vibe.find(element).text()
    }
}