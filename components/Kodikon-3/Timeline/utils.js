import { use } from "react";
import Link from "next/link";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig";
export async function getCharacters() {
  return await (
    await fetch("https://rickandmortyapi.com/api/character")
  ).json();
}
export async function getAllEvents() {
  const eventsCollection = collection(db, "events");
  try {
    const querySnapshot = await getDocs(eventsCollection);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
    return querySnapshot
  } catch (e) {
    console.error("Error getting documents: ", e);
  }
}
