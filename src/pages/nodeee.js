import { db } from "../lib/firebase.js";
import { collection, doc, writeBatch } from "firebase/firestore";

const chapters = [
  { name: "India", flag: "🇮🇳", members: 18, memberList: ["Arush","Aswatha Biju","Daksh Lahoty","Rigveda","Griffin Beno","Kyishong Bharali Das","Rigzin Lhamo","Sonit","Harshith Nain","Siddharth Kumar Gopal","Priyanshi","Apoorv Chopra","Apurva Suhas Patil","Apoorv Jha","Daksh Khandelwal","Nehal","Suryansh","Suryakanta"], lat: 20.5937, lng: 78.9629 },
  { name: "Sri Lanka", flag: "🇱🇰", members: 13, memberList: ["Shumayl Arman","Imadh Nazmi","Narmada Rathnayake","Sehansa Thenuki","Riyal Muhammadh Rijaz","Mohammed Raihan","Abdullah Ilmudeen","Abishan","Archana","Ramsha Razmi","Sarasi","Minha","Hirini"], lat: 7.8731, lng: 80.7718 },
  { name: "China", flag: "🇨🇳", members: 4, memberList: ["Yu Lefei","Zhihang Zhong","Yan Shuyu","Wen weihao"], lat: 35.8617, lng: 104.1954 },
  { name: "Israel", flag: "🇮🇱", members: 4, memberList: ["Sol","Tamar","Nadav","Yam"], lat: 31.0461, lng: 34.8516 },
  { name: "Romania", flag: "🇷🇴", members: 4, memberList: ["Ciocoiu Calin Lucian","Rares Gheorge","Carla Gheorge","Enache Raluca"], lat: 45.9432, lng: 24.9668 },
  { name: "Austria", flag: "🇦🇹", members: 3, memberList: ["Maximilian Kepplinger","Nico Waldhör","Kevin Jan Brunner"], lat: 47.5162, lng: 14.5501 },
  { name: "Indonesia", flag: "🇮🇩", members: 2, memberList: ["Shift","Sanny"], lat: -0.7893, lng: 113.9213 },
  { name: "USA", flag: "🇺🇸", members: 2, memberList: ["Yale Zhang","Rudra Pethani"], lat: 37.0902, lng: -95.7129 },
  { name: "Australia", flag: "🇦🇺", members: 1, memberList: ["Leo Buckle"], lat: -25.2744, lng: 133.7751 },
  { name: "Belarus", flag: "🇧🇾", members: 1, memberList: ["Raman Peniaz"], lat: 53.7098, lng: 27.9534 },
  { name: "Czech Republic", flag: "🇨🇿", members: 1, memberList: ["Antonín Pech"], lat: 49.8175, lng: 15.4730 },
  { name: "Estonia", flag: "🇪🇪", members: 1, memberList: ["Laure Risto"], lat: 58.5953, lng: 25.0136 },
  { name: "France", flag: "🇫🇷", members: 1, memberList: ["Eva"], lat: 46.2276, lng: 2.2137 },
  { name: "Germany", flag: "🇩🇪", members: 1, memberList: ["Yao Junzhe"], lat: 51.1657, lng: 10.4515 },
  { name: "Hungary", flag: "🇭🇺", members: 1, memberList: ["Angshuman"], lat: 47.1625, lng: 19.5033 },
  { name: "Italy", flag: "🇮🇹", members: 1, memberList: ["Michele Cavalli"], lat: 41.8719, lng: 12.5674 },
  { name: "Korea", flag: "🇰🇷", members: 1, memberList: ["An Jihoo"], lat: 35.9078, lng: 127.7669 },
  { name: "Singapore", flag: "🇸🇬", members: 1, memberList: ["Manan Sethia"], lat: 1.3521, lng: 103.8198 },
  { name: "Spain", flag: "🇪🇸", members: 1, memberList: ["Nil"], lat: 40.4637, lng: -3.7492 },
];

function slugify(name) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

async function seed() {
  const batch = writeBatch(db);
  const chaptersRef = collection(db, "Chapters");

  chapters.forEach((chapter) => {
    const docRef = doc(chaptersRef, slugify(chapter.name)); // e.g. "india", "sri-lanka"
    batch.set(docRef, chapter);
  });

  await batch.commit();
  console.log(`✅ Seeded ${chapters.length} chapters into Firestore.`);
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});