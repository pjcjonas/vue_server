import { SHA3 } from "crypto-js";
import { User } from "./dal/models/user";

export interface Login {
  username: string;
  password: string;
}

export const checkUserAuth = async (logins: Login): Promise<User> => {
  try {
    const { username, password } = logins;
    const findUser = await User.findOne({ where: { username: username } });

    if (findUser) {
      return findUser;
    }

    const encryptedUserPass = SHA3(password, { outputLength: 256 }).toString();
    const user = await User.create({ username, password: encryptedUserPass });
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("There was an error creating the user");
  }
};
