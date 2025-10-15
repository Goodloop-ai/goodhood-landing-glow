import LandingPage from "./LandingPage";
import './App.css';
import { useEffect, useState } from "react";

type BrowserInfo = {
  type: string; 
  mobile: boolean;
}

const App = () => {
  const [browserInfo, setBrowserInfo] = useState<BrowserInfo | null>(null); 

  async function getBrowserInfo() {
    const userAgent = navigator.userAgent;
    let type = "";
    if (userAgent.includes("Chrome") && !userAgent.includes("Edg")) {
      type = "Chrome";
    } else if (userAgent.includes("Firefox")) {
      type = "Firefox";
    } else if (userAgent.includes("Edg")) {
      type = "Edge";
    } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
      type = "Safari";
    } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
      type = "Opera";
    } else {
      type = "unknown or other";
    }

    setBrowserInfo({ type, mobile: navigator.maxTouchPoints > 1 });
  }

  useEffect(() => {
    getBrowserInfo();
  }, [])

  const navToApp = async () => {

    const shareData = {
      title: "Test title",
      text: "test text",
      url: "goodloop://",
    };

    try {
      await navigator.share(shareData);
      console.log("Shared successfully");
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  }

  return <>
   <LandingPage />
  </>
}

export default App;
