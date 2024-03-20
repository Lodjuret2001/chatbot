interface SubTopic {
  select: number;
  name: string;
}

const enum Topics {
  Websites = "Websites",
  Ecommerce = "Ecommerce",
  PhotoAndFilm = "Photo&Film",
  GraphicDesign = "Graphic Design",
}

const subTopics: Record<string, SubTopic[]> = {
  [Topics.Websites]: [
    { select: 1, name: "Web Development" },
    { select: 2, name: "UI/UX Design" },
    { select: 3, name: "Search Engine Optimization" },
  ],
  [Topics.Ecommerce]: [
    { select: 1, name: "Platform Integration" },
    { select: 2, name: "Payment Gateways" },
    { select: 3, name: "Product Catalog Management" },
  ],
  [Topics.PhotoAndFilm]: [
    { select: 1, name: "Photography" },
    { select: 2, name: "Videography" },
    { select: 3, name: "Editing" },
  ],
  [Topics.GraphicDesign]: [
    { select: 1, name: "Branding" },
    { select: 2, name: "Print Design" },
    { select: 3, name: "Digital Graphics" },
  ],
};

export default class ChatBot {
  introduction() {
    console.log("Welcome to Agencys help chat!");
    console.log("How can we assist you today?");
    console.log(`1. ${Topics.Websites}`);
    console.log(`2. ${Topics.Ecommerce}`);
    console.log(`3. ${Topics.PhotoAndFilm}`);
    console.log(`4. ${Topics.GraphicDesign}`);
    console.log("(type 'exit' to leave)");
  }

  handleUserInput(answer: string): string | undefined {
    const choice = parseInt(answer);
    switch (choice) {
      case 1:
        return Topics.Websites;
      case 2:
        return Topics.Ecommerce;
      case 3:
        return Topics.PhotoAndFilm;
      case 4:
        return Topics.GraphicDesign;

      default:
        console.log("Invalid choice. Please choose a number between 1 and 4.");
        return undefined;
    }
  }
  displaySubTopics(topic: string) {
    console.log(`Alright! What do you need help with regarding ${topic}?`);
    const selectedSubTopic = subTopics[topic];
    selectedSubTopic.forEach((subtopic) => {
      console.log(`${subtopic.select}. ${subtopic.name}`);
    });
    console.log("('back' or 'exit' to leave)");
  }
  handleUserInput2(topic: string, answer: string): string | undefined {
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
  displayLinkAndConsent(topic: string, subtopic: string) {
    const hyphenTopic = topic.toLowerCase().replace(/[\s&]+/g, "-");
    const hyphenSubtopic = subtopic.toLowerCase().replace(/[\s/]+/g, "-");
    console.log(
      `Here can you can read more about ${subtopic}: https://www.agency.com/${hyphenTopic}/${hyphenSubtopic}`
    );
    console.log(
      `Would you like us to reach out to you, and connect you with a expert in ${subtopic}?`
    );
  }
}

export { Topics, subTopics };
