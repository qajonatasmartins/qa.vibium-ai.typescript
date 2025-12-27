import { vibe } from "../constants";

export default class TypeCustomCommand {

    /**
     * Método para digitar texto em um campo com Vibium
     * @param element - Seletor do elemento a ser digitado
     * @param text - Texto a ser digitado
     * @returns Promise<void>
     */
    public async type(element: string, text: string) {
        await vibe.find(element).type(text)
    }
}