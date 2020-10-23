import { Profile } from "~/app/models/profile.model";
import { Task } from "~/app/models/task.model";
import { User } from "../app/models/user.model";

export const enviroment =  {
    urlApi: 'https://timepoint-2020.herokuapp.com',
    user: new User,
    profile : new Profile,
    task: new Task
}