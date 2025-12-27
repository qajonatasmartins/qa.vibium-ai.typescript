import { expectTs } from "../constants";

export default class ExpectCustomCommand {

    /**
     * Método para esperar um elemento com Vibium
     * @param element - Seletor do elemento a ser esperado
     * @returns Promise<void>
     */
    public async expect(expectedText: string, actualText: string) {
        await expectTs(actualText).to.contain(expectedText)
    }
}