import { rl } from "../index.js";
export default class ChatBot {
    introduction() {
        console.log("Welcome to PixlMedias Agency help chat!");
        console.log("How can we assist you today?");
        console.log(`1. ${"Websites"}`);
        console.log(`2. ${"Ecommerce"}`);
        console.log(`3. ${"Photo&Film"}`);
        console.log(`4. ${"Graphic Design"}`);
    }
    handleUserInput(answer) {
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
        console.log("Alright! What do you need help with regarding photo and film?");
    }
    askGraphicDesignQuestions() {
        console.log("Got it! Tell us more about your graphic design needs.");
    }
}
