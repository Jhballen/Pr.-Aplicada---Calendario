import { Task } from "./task.model";

export class User {
    mail: String;
    password: String;
    profilePicture: number;
    type: String;
    tasks: [Task];
}