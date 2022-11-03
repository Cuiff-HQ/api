import { User } from "../../entity/User";
import { AppDataSource } from "../../data-source";
import { UuidService } from "../uuid";

export class userService {
    public static async createUser(data: UserData): Promise<User> {
        const user = new User();
        user.firstName = data.firstName;
        user.lastName = data.lastName;
        user.age = data.age;
        user.uuid = UuidService.getPrefixedUuid("user");
        await AppDataSource.manager.save(user);
        return user;
    }
}

interface UserData {
    firstName: string;
    lastName: string;
    age: number;
}
