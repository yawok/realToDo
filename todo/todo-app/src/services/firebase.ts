import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { config } from "dotenv";

config();
const env = process.env;

const firebaseConfig = {
  apiKey: env.REACT_APP_API_KEY,
  authDomain: env.REACT_APP,
  projectId: env.PROJECT_ID,
  storageBucket: env.STORAGE_BUCKET,
  messagingSenderId: env.MESSSAGING_SENDER_ID,
  appId: env.APP_ID,
  measurementId: env.MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);