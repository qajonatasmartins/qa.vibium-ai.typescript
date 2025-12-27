import { assertTs, expectTs } from "../constants";

export default class ExpectCustomCommand {

    /**
     * Método para verificar se o texto atual contém o texto esperado
     * @param expectedText - Texto esperado
     * @param actualText - Texto atual
     * @returns Promise<void>
     */
    public async expectToContainText(expectedText: string, actualText: string) {
        await expectTs(actualText).to.contain(expectedText)
    }

    /**
     * Método para verificar se o texto atual é igual ao texto esperado
     * @param expectedText - Texto esperado
     * @param actualText - Texto atual
     * @param messageIfError - Mensagem de erro se o texto atual não for igual ao texto esperado
     * @returns Promise<void>
     */
    public async assertToEqualText(expectedText: string, actualText: string, messageIfError: string) {
        await assertTs.equal(actualText, expectedText, messageIfError)
    }
}