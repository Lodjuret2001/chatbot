import readline from "readline";
import { stdin as input, stdout as output } from "process";
import ChatBot from "./ChatBot.js";
import User, { UserInfo } from "./User.js";

const rl = readline.createInterface({ input, output });
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
  if (answer.toLowerCase() === "back") {
    return;
  }

  const topic = chatBot.handleUserInput(answer);
  if (topic === "NotValidTopic") {
    rl.prompt();
    return;
  }

  chatBot.askSubTopicQuestions(topic);
  chatBot.displaySubTopics(topic);
  rl.prompt();
  return topic;
}

function handleSubTopicInput(answer: string, topic: string) {
  if (answer.toLowerCase() === "exit") {
    rl.close();
    return;
  }
  if (answer.toLowerCase() === "back") {
    return;
  }
  const subtopic = chatBot.handleUserInput2(topic, answer);
  if (subtopic === "NotValidSubTopic") {
    rl.prompt();
    return;
  }
  chatBot.displayWebsiteLink(topic, subtopic);
  chatBot.askForContact(subtopic);
  rl.prompt();
  return subtopic;
}

function handleContactInput(answer: string) {
  if (answer.toLowerCase() === "back") {
    return;
  }
  const choice = answer.toLowerCase();
  switch (choice) {
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
        "Invalid choice. You can choose to 'exit' or type: 'yes' or 'no'."
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
            `We'll reach out to you ${newUser.userInfo.name} with a expert on the area in ${inputs.subtopic}`
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

rl.on("line", (answer: string) => {
  if (!inputs.topic) {
    inputs.topic = handleTopicInput(answer);
  } else {
    if (!inputs.subtopic) {
      inputs.subtopic = handleSubTopicInput(answer, inputs.topic);
    } else {
      if (!inputs.consent) {
        handleContactInput(answer);
      } else {
        getContactInfo();
      }
    }
  }
  return;
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
