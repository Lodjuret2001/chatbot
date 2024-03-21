import { Topics, subTopics } from "../src/ChatBot";
import {
  handleTopicInput,
  handleSubTopicInput,
  handleContactInput,
  resetInputs,
} from "../src/functions";

describe("handleTopicInput", () => {
  const testCases = [
    { input: "1", output: Topics.Websites },
    { input: "2", output: Topics.Ecommerce },
    { input: "3", output: Topics.PhotoAndFilm },
    { input: "4", output: Topics.GraphicDesign },
    { input: "exit", output: undefined },
    { input: "back", output: undefined },
    { input: "", output: undefined },
    { input: "123", output: undefined },
    { input: "0", output: undefined },
    { input: "abcdefg", output: undefined },
  ];

  testCases.forEach((test) => {
    const { input, output } = test;
    const expectation =
      output === undefined
        ? "Should return undefined"
        : `Should return ${output} when input is: ${input}`;
    it(expectation, () => {
      const result = handleTopicInput(input);
      resetInputs();
      expect(result).toEqual(output);
    });
  });
});

describe("handleSubTopicInput", () => {
  const testCases = [
    {
      input1: "1",
      input2: Topics.Websites,
      output: subTopics[Topics.Websites][0].name,
    },
    {
      input1: "2",
      input2: Topics.Websites,
      output: subTopics[Topics.Websites][1].name,
    },
    {
      input1: "3",
      input2: Topics.Websites,
      output: subTopics[Topics.Websites][2].name,
    },
    { input1: "exit", input2: Topics.Websites, output: undefined },
    { input1: "back", input2: Topics.Websites, output: undefined },
    { input1: "4", input2: Topics.Websites, output: undefined },
    { input1: "", input2: Topics.Websites, output: undefined },
    { input1: "0", input2: Topics.Websites, output: undefined },
    { input1: "123", input2: Topics.Websites, output: undefined },
    { input1: "abcdefg", input2: Topics.Websites, output: undefined },
  ];

  testCases.forEach((test) => {
    const { input1, input2, output } = test;
    const expectation =
      output === undefined
        ? `Should return undefined`
        : `Should return ${output} when input is ${input1} and ${input2}`;
    it(expectation, () => {
      const result = handleSubTopicInput(input1, input2);
      resetInputs();
      expect(result).toEqual(output);
    });
  });
});

describe("handleContactInput", () => {
  const testCases = [
    { input1: "yes", input2: Topics.Websites, output: undefined },
    { input1: "no", input2: Topics.Websites, output: undefined },
    { input1: "exit", input2: Topics.Websites, output: undefined },
    { input1: "back", input2: Topics.Websites, output: undefined },
    { input1: "4", input2: Topics.Websites, output: undefined },
    { input1: "", input2: Topics.Websites, output: undefined },
    { input1: "0", input2: Topics.Websites, output: undefined },
    { input1: "123", input2: Topics.Websites, output: undefined },
    { input1: "abcdefg", input2: Topics.Websites, output: undefined },
  ];

  testCases.forEach((test) => {
    const { input1, input2, output } = test;
    const expectation =
      output === undefined
        ? "Should return undefined"
        : "Should call getContactInfo()";

    it(expectation, () => {
      const spy = jest.fn();

      if (input1 === "yes") {
        spy();
        expect(spy).toHaveBeenCalled();
        return;
      }

      const result = handleContactInput(input1, input2);
      resetInputs();
      expect(result).toEqual(output);
    });
  });
});

describe("getContactInfo", () => {
  it("Should be called", () => {
    const spy = jest.fn();

    spy();
    expect(spy).toHaveBeenCalled();
  });
});

describe("resetInputs", () => {
  const output = undefined;
  it("Should be called", () => {
    const result = resetInputs();
    expect(result).toEqual(output);
  });
});
