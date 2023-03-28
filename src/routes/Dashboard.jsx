import React from "react";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

import { initializeApp } from "firebase/app";

const Dashboard = () => {
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);
  console.log(db);
  return <div></div>;
};

export default Dashboard;
