import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import ChatBot from "./src/ChatBot.js";
import User from "./src/User.js";

export const rl = readline.createInterface({ input, output });

rl.on("line", (answer: string) => {
  ChatBot.prototype.handleUserInput(answer);
});
ChatBot.prototype.introduction();
rl.prompt();
