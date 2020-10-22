import { Profile } from "./profile.model";

export class User {
    _id: string;
    mail: String;
    password: String;
    type: String;
    profiles: [Profile];
}