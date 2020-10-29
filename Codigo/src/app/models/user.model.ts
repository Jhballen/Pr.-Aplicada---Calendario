import { Task } from "./task.model";
import { Profile } from "./profile.model";

export class User {
    _id: string;
    mail: String;
    password: String;
    profilePicture: number;
    type: String;
    tasks: [Task];
    profile: [Profile];
}