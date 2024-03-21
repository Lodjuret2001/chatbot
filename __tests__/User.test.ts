import User, { UserInfo } from "../src/User";

describe("User", () => {
  const userInfo: UserInfo = {
    name: "John Doe",
    mail: "john@example.com",
    phoneNumber: "1234567890",
    contactMethod: "email",
  };

  it("Should create a valid User", () => {
    const user = new User(userInfo);

    expect(user.userInfo).toEqual(userInfo);
  });
});
