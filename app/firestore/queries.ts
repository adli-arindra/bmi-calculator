import { collection, query, addDoc, getDocs, where, deleteDoc, doc } from "firebase/firestore";
import { db } from "./index";

export const AddData = async function(email:string, weight:number, height:number) {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        email: email, 
        name: name,
        weight: weight,
        height: height
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}


export const ReadData = async function(email:string) {
  const users = collection(db, "users");
  const q = query(users, where("email", "==", email));
  const querySnapshot = await getDocs(q);
  const results = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  const ret = {
    weight: results[0].weight,
    height: results[0].height
  }
  return ret;
}

export const EmailExist = async function(email: string) {
  const q = query(
    collection(db, "users"),
    where("email", "==", email)
  );

  const querySnapshot = await getDocs(q);
  if (querySnapshot.docs.length > 0) return true;
  else return false;
}

export async function DeleteByEmail(email: string) {
  const q = query(collection(db, "users"), where("email", "==", email));
  const querySnapshot = await getDocs(q);

  const deletePromises = querySnapshot.docs.map((docSnap) => {
    const docRef = doc(db, "users", docSnap.id);
    return deleteDoc(docRef);
  });

  await Promise.all(deletePromises);
  return `${querySnapshot.docs.length} document(s) deleted.`;
}
