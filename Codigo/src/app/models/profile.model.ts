import { Task } from "../models/task.model";

export class Profile {
    _id: String;
    name: String;
    profilePicture: number;
    task: [Task];
    userId: string;
};