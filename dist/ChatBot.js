const subTopics = {
    ["Websites"]: [
        { select: 1, name: "Web Development" },
        { select: 2, name: "UI/UX Design" },
        { select: 3, name: "Search Engine Optimization" },
    ],
    ["Ecommerce"]: [
        { select: 1, name: "Platform Integration" },
        { select: 2, name: "Payment Gateways" },
        { select: 3, name: "Product Catalog Management" },
    ],
    ["Photo&Film"]: [
        { select: 1, name: "Photography" },
        { select: 2, name: "Videography" },
        { select: 3, name: "Editing" },
    ],
    ["Graphic Design"]: [
        { select: 1, name: "Branding" },
        { select: 2, name: "Print Design" },
        { select: 3, name: "Digital Graphics" },
    ],
};
export default class ChatBot {
    introduction() {
        console.log("Welcome to PixlMedias Agency help chat!");
        console.log("How can we assist you today?");
        console.log(`1. ${"Websites"}`);
        console.log(`2. ${"Ecommerce"}`);
        console.log(`3. ${"Photo&Film"}`);
        console.log(`4. ${"Graphic Design"}`);
        console.log("(type 'exit' to leave)");
    }
    handleUserInput(answer) {
        const choice = parseInt(answer);
        switch (choice) {
            case 1:
                return "Websites";
            case 2:
                return "Ecommerce";
            case 3:
                return "Photo&Film";
            case 4:
                return "Graphic Design";
            default:
                console.log("Invalid choice. Please choose a number between 1 and 4.");
                return undefined;
        }
    }
    displaySubTopics(topic) {
        console.log(`Alright! What do you need help with regarding ${topic}?`);
        const selectedSubTopic = subTopics[topic];
        selectedSubTopic.forEach((subtopic) => {
            console.log(`${subtopic.select}. ${subtopic.name}`);
        });
        console.log("('back' or 'exit' to leave)");
    }
    handleUserInput2(topic, answer) {
        const subtopic = subTopics[topic];
        const choice = parseInt(answer);
        switch (choice) {
            case 1:
                return subtopic[0].name;
            case 2:
                return subtopic[1].name;
            case 3:
                return subtopic[2].name;
            default:
                console.log("Invalid choice. Please choose a number between 1 and 3.");
                return undefined;
        }
    }
    displayLinkAndConsent(topic, subtopic) {
        const hyphenTopic = topic.toLowerCase().replace(/[\s&]+/g, "-");
        const hyphenSubtopic = subtopic.toLowerCase().replace(/[\s/]+/g, "-");
        console.log(`Here can you can read more about ${subtopic}: https://www.pixlmedia.se/${hyphenTopic}/${hyphenSubtopic}`);
        console.log(`Would you like us to reach out to you, and connect you with a expert in ${subtopic}?`);
    }
}
//# sourceMappingURL=ChatBot.js.map