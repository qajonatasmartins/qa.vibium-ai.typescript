import type { ISingup } from "../../../interface/login/ISingup.interface";
import { faker } from "@faker-js/faker";

export default class SingupBuilder {

    private signupData: ISingup

    constructor() {
        this.signupData = {
            name: faker.person.fullName(),
            email: faker.internet.email()
        }
    }

    /**
     * Método para criar um novo builder de signup
     * @returns SingupBuilder
     */
    anSingup(): SingupBuilder {
        return new SingupBuilder()
    }

    /**
     * Método para definir o nome do usuário
     * @param name - Nome do usuário
     * @returns SingupBuilder
     */
    withName(name: string): SingupBuilder {
        this.signupData.name = name
        return this
    }

    /**
     * Método para definir o email do usuário
     * @param email - Email do usuário
     * @returns SingupBuilder
     */
    withEmail(email: string): SingupBuilder {
        this.signupData.email = email
        return this
    }

    /**
     * Método para construir os dados de signup
     * @returns ISingup
     */
    build(): ISingup {
        return this.signupData
    }
}