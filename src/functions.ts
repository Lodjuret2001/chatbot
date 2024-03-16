import User, { UserInfo } from "./User.js";
import ChatBot from "./ChatBot.js";
import { rl } from "./index.js";

const chatBot = new ChatBot();

interface Inputs {
  topic: string | undefined;
  subtopic: string | undefined;
  consent: boolean;
}

let inputs: Inputs = {
  topic: undefined,
  subtopic: undefined,
  consent: false,
};

function handleTopicInput(answer: string) {
  if (answer.toLowerCase() === "exit") {
    rl.close();
    return;
  }

  const topic = chatBot.handleUserInput(answer);
  if (!topic) {
    rl.prompt();
    return;
  }

  chatBot.displaySubTopics(topic);
  rl.prompt();
  return topic;
}

function handleSubTopicInput(answer: string, topic: string) {
  switch (answer.toLowerCase()) {
    case "exit":
      rl.close();
      return;
    case "back":
      inputs.topic = undefined;
      chatBot.introduction();
      rl.prompt();
      return;
  }
  const subtopic = chatBot.handleUserInput2(topic, answer);
  if (!subtopic) {
    rl.prompt();
    return;
  }
  chatBot.displayLinkAndConsent(topic, subtopic);
  rl.prompt();
  return subtopic;
}

function handleContactInput(answer: string, topic: string) {
  switch (answer.toLowerCase()) {
    case "back":
      inputs.subtopic = undefined;
      chatBot.displaySubTopics(topic);
      rl.prompt();
      return;
    case "exit":
      rl.close();
      return;
    case "no":
      rl.close();
      return;
    case "yes":
      inputs.consent = true;
      getContactInfo();
      return;
    default:
      console.log(
        "Invalid choice. You can choose to 'back', 'exit', 'yes' or 'no'."
      );
      rl.prompt();
      return;
  }
}

function getContactInfo() {
  console.log(
    "Please provide your contact information so we can reach out to you"
  );
  rl.question("Name: ", (name: string) => {
    rl.question("Mail: ", (mail: string) => {
      rl.question("Phonenumber: ", (phoneNumber: string) => {
        rl.question("Preferred Contact Method: ", (contactMethod: string) => {
          const contactInfo: UserInfo = {
            name,
            mail,
            phoneNumber,
            contactMethod,
          };
          const newUser = new User(contactInfo);
          console.log(
            `${newUser.userInfo.name}! :) We'll reach out to you with an expert regarding ${inputs.subtopic}`
          );
          rl.close();
        });
      });
    });
  });
}

function resetInputs() {
  inputs.topic = undefined;
  inputs.subtopic = undefined;
  inputs.consent = false;
}

export {
  inputs,
  handleTopicInput,
  handleSubTopicInput,
  handleContactInput,
  getContactInfo,
  resetInputs,
};
