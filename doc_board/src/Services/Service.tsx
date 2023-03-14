import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

class DataService {
    async test() {
        try {
            const docRef = await addDoc(collection(db, "Vendedor"), {
              nome: "Ada",
              privilegio: "0",
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
}

export default new DataService();