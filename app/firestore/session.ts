import { auth } from "../auth";
import { ReadData, AddData, EmailExist, DeleteByEmail } from "./queries";

export const SetSession = async function(weight:number, height:number) {
    try {
        const session = await auth();
        if (session && session.user) {
            const email = session.user.email as string;
            if (await EmailExist(email)) {
                DeleteByEmail(email);
            }
            AddData(email, weight, height);
        }
    } catch (err) {
        console.log(err);
    }
}

export const GetSession = async function() {
    try {
        const session = await auth();
        if (session && session.user) {
            const email = session.user.email as string;
            const data = ReadData(email);
            const newPerson = {
                weight: (await data).weight as number,
                height: (await data).height as number,
            }
            return newPerson;
        }
    } catch (err) {
        console.log(err);
    }
}