import { vibe } from "../../constants";
import { menuComponents } from "./menu.elements";

export default class MenuInteractions {

    async clickHomeMenu() {
        await vibe.find(menuComponents.btnHomeMenu).click()
    }
}