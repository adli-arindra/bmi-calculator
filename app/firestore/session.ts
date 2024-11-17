import { ReadData, AddData, EmailExist, DeleteByEmail } from "./queries";

export const SetBMISession = async function(email:string, weight:number, height:number) {
    try {        
        if (await EmailExist(email)) {
            await DeleteByEmail(email);
        }
        await AddData(email, weight, height);
    } catch (err) {
        console.log(err);
        console.log("Error setting a session");
    }
}

export const GetBMISession = async function(email: string) {
    try {
        console.log("Getting session");
        const data = await ReadData(email);
        console.log(data);
        const newPerson = {
            weight: (data).weight as number,
            height: (data).height as number,
        }
        return newPerson;
    } catch (err) {
        console.log(err);
        console.log("Error getting a session");
    }
}