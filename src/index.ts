import readline from "readline";
import { stdin as input, stdout as output } from "process";
import ChatBot from "./ChatBot.js";
import {
  inputs,
  handleTopicInput,
  handleSubTopicInput,
  handleContactInput,
  getContactInfo,
  resetInputs,
} from "./functions.js";

const rl = readline.createInterface({ input, output });
const chatBot = new ChatBot();

rl.on("line", (answer: string) => {
  if (!inputs.topic) {
    inputs.topic = handleTopicInput(answer);
  } else if (!inputs.subtopic) {
    inputs.subtopic = handleSubTopicInput(answer, inputs.topic);
  } else if (!inputs.consent) {
    handleContactInput(answer, inputs.topic);
  } else {
    getContactInfo();
  }
});

rl.on("close", () => {
  console.log(
    "Thank you for using our ChatBot! The chat will automatically close in 3 seconds. Feel free to reach out to us if you have any other questions! :)"
  );
  setTimeout(() => {
    resetInputs();
    console.log("Chat closed...");
    return;
  }, 3000);
});

chatBot.introduction();
rl.prompt();

export { rl };
