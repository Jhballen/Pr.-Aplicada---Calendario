import { Profile } from "./profile.model";

export class Task {
    _id: String;
    title: String;
    description: String;
    status: Number;
    users: Profile;
};