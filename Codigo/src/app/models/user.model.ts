<<<<<<< HEAD
import { Task } from "./task.model";
=======
>>>>>>> 980fbbbd147c75f7b72826a5d12efffe569fbed7
import { Profile } from "./profile.model";

export class User {
    _id: string;
    mail: String;
    password: String;
    type: String;
<<<<<<< HEAD
    tasks: [Task];
    profile: [Profile];
=======
    profiles: [Profile];
>>>>>>> 980fbbbd147c75f7b72826a5d12efffe569fbed7
}