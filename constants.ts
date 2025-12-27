import { expect } from "chai";
import { browserSync } from "vibium";
import ClickCustomCommand from "./core/click.customCommand";
import BaseCustomCommand from "./core/base.customCommand";
import ExpectCustomCommand from "./core/expect.customCommand";
import GetTextCustomCommand from "./core/getText.customCommand";

export const vibe = browserSync.launch()
export const expectTs = expect

/** Custom Commands */
export const baseCustomCommand = new BaseCustomCommand()
export const clickCustomCommand = new ClickCustomCommand()
export const expectCustomCommand = new ExpectCustomCommand()
export const getTextCustomCommand = new GetTextCustomCommand()