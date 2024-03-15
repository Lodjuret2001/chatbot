import { rl } from "../index.js";

const enum Topics {
  Websites = "Websites",
  Ecommerce = "Ecommerce",
  PhotoAndFilm = "Photo&Film",
  GraphicDesign = "Graphic Design",
}

export default class ChatBot {
  introduction() {
    console.log("Welcome to PixlMedias Agency help chat!");
    console.log("How can we assist you today?");
    console.log(`1. ${Topics.Websites}`);
    console.log(`2. ${Topics.Ecommerce}`);
    console.log(`3. ${Topics.PhotoAndFilm}`);
    console.log(`4. ${Topics.GraphicDesign}`);
  }

  handleUserInput(answer: string) {
    const choice = parseInt(answer);
    switch (choice) {
      case 1:
        this.askWebsiteQuestions();
        break;
      case 2:
        this.askEcommerceQuestions();
        break;
      case 3:
        this.askPhotoAndFilmQuestions();
        break;
      case 4:
        this.askGraphicDesignQuestions();
        break;

      default:
        console.log("Invalid choice. Please choose a number between 1 and 4.");
        rl.prompt();
    }
  }
  askWebsiteQuestions() {
    console.log("Great! Let's get started with websites.");
  }
  askEcommerceQuestions() {
    console.log("Sure! Let's talk about ecommerce.");
  }
  askPhotoAndFilmQuestions() {
    console.log(
      "Alright! What do you need help with regarding photo and film?"
    );
  }
  askGraphicDesignQuestions() {
    console.log("Got it! Tell us more about your graphic design needs.");
  }
}
