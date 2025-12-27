import { expect, assert } from "chai";
import { browserSync } from "vibium";
import ClickCustomCommand from "./core/click.customCommand";
import BaseCustomCommand from "./core/base.customCommand";
import ExpectCustomCommand from "./core/expect.customCommand";
import GetTextCustomCommand from "./core/getText.customCommand";
import TypeCustomCommand from "./core/type.customCommand";
import SingupBuilder from "./builder/login/singup/singup.builder";
import MenuActions from "./components/menu/menu.actions";
import LoginActions from "./components/login/login.actions";
import LoginQuestions from "./components/login/login.questions";
import SingupFlows from "./flows/login/singup.flows";
import RegisterSignupBuilder from "./builder/login/singup/registerSignup.builder";

const headless = process.env.HEADLESS?.toLowerCase() === "true" ? true : false

export const vibe = browserSync.launch({ headless: headless })
export const expectTs = expect
export const assertTs = assert

/** Custom Commands */
export const baseCustomCommand = new BaseCustomCommand()
export const clickCustomCommand = new ClickCustomCommand()
export const expectCustomCommand = new ExpectCustomCommand()
export const getTextCustomCommand = new GetTextCustomCommand()
export const typeCustomCommand = new TypeCustomCommand()

/** Builders */
export const singupBuilder = new SingupBuilder()
export const registerSignupBuilder = new RegisterSignupBuilder()

/** Actions */
export const menuActions = new MenuActions()
export const loginActions = new LoginActions()

/** Questions */
export const loginQuestions = new LoginQuestions()

/** Flows */
export const singupFlows = new SingupFlows()