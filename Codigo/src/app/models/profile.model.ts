import { Task } from "../models/task.model";

export class Profile {
    _id: String;
    name: String;
    imageProfile: String;
    task: [Task];
};