import LandingPage from "./LandingPage";
import './App.css';
import { useEffect, useState } from "react";
import ToAppPopup from "./components/ToAppPopup";

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

    const info = { type, mobile: navigator.maxTouchPoints > 1 };

    setBrowserInfo(info);
  }

  useEffect(() => {
    getBrowserInfo();
  }, [])

  return <>
  {
    browserInfo && browserInfo.mobile === true && <ToAppPopup />
  }
   <LandingPage />
  </>
}

export default App;
