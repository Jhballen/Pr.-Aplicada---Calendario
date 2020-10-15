import { User } from "./user.model";

export class Task {
    _id: String;
    title: String;
    description: String;
    status: Number;
    users: User;
};