import ChatBot, { Topics, subTopics } from "../src/ChatBot";

const chatbot = new ChatBot();

describe("introduction", () => {
  it("should be executed when running", () => {
    chatbot.introduction = jest.fn();

    chatbot.introduction();
    expect(chatbot.introduction).toHaveBeenCalled();
  });
});

describe("handleUserInput", () => {
  const testCases = [
    { input: "1", output: Topics.Websites },
    { input: "2", output: Topics.Ecommerce },
    { input: "3", output: Topics.PhotoAndFilm },
    { input: "4", output: Topics.GraphicDesign },
    { input: "", output: undefined },
    { input: "123", output: undefined },
    { input: "0", output: undefined },
    { input: "abcdefg", output: undefined },
  ];
  testCases.forEach((test) => {
    const { input, output } = test;
    const expectation =
      output === undefined
        ? "should return undefined"
        : `should return ${output} when input is ${input}`;

    it(expectation, () => {
      expect(chatbot.handleUserInput(input)).toEqual(output);
    });
  });
});

describe("displaySubTopics", () => {
  const testCase = [
    { input: Topics.Websites },
    { input: Topics.Ecommerce },
    { input: Topics.PhotoAndFilm },
    { input: Topics.GraphicDesign },
  ];
  testCase.forEach((test) => {
    it(`should be executed when input is: ${test.input}`, () => {
      chatbot.displaySubTopics = jest.fn();

      chatbot.displaySubTopics(test.input);
      expect(chatbot.displaySubTopics).toHaveBeenCalled();
    });
  });
});

describe("handleUserInput2", () => {
  const testCases = [
    {
      input1: Topics.Websites,
      input2: "1",
      output: subTopics[Topics.Websites][0].name,
    },
    {
      input1: Topics.Websites,
      input2: "2",
      output: subTopics[Topics.Websites][1].name,
    },
    {
      input1: Topics.Websites,
      input2: "3",
      output: subTopics[Topics.Websites][2].name,
    },
    { input1: Topics.Websites, input2: "4", output: undefined },
    { input1: Topics.Websites, input2: "", output: undefined },
    { input1: Topics.Websites, input2: "0", output: undefined },
    { input1: Topics.Websites, input2: "123", output: undefined },
    { input1: Topics.Websites, input2: "abcdefg", output: undefined },
  ];
  testCases.forEach((test) => {
    const { input1, input2, output } = test;

    expect(chatbot.handleUserInput2(input1, input2)).toEqual(output);
  });
});

describe("displayLinkAndConsent", () => {
  const { input1, input2 } = {
    input1: Topics.Websites,
    input2: subTopics[Topics.Websites][0].name,
  };
  it("should be called", () => {
    chatbot.displayLinkAndConsent = jest.fn();

    chatbot.displayLinkAndConsent(input1, input2);
    expect(chatbot.displayLinkAndConsent).toHaveBeenCalled();
  });
});
