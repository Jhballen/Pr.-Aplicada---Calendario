import { Profile } from "./profile.model";

export class Task {
    _id: String;
    title: String;
    description: String;
    status: Number;
    endDate: Date;
    evidence: String;
    profile: [String];
};