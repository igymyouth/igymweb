import { db } from "../lib/firebase.js";
import { collection, getDocs } from "firebase/firestore";

async function getApplications() {
  try {
    const querySnapshot = await getDocs(collection(db, "Applications"));

    const applications = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log(applications);
    return applications;
  } catch (error) {
    console.error("Error fetching applications:", error);
  }
}

getApplications();