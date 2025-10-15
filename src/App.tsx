import LandingPage from "./LandingPage";
import './App.css';
import { useEffect, useState } from "react";

// WICG Spec: https://wicg.github.io/ua-client-hints
type Navigator = NavigatorUA

// https://wicg.github.io/ua-client-hints/#navigatorua
declare interface NavigatorUA {
    readonly userAgentData?: NavigatorUAData;
}

// https://wicg.github.io/ua-client-hints/#dictdef-navigatoruabrandversion
interface NavigatorUABrandVersion {
    readonly brand: string;
    readonly version: string;
}

// https://wicg.github.io/ua-client-hints/#dictdef-uadatavalues
interface UADataValues {
    readonly brands?: NavigatorUABrandVersion[];
    readonly mobile?: boolean;
    readonly platform?: string;
    readonly architecture?: string;
    readonly bitness?: string;
    readonly formFactor?: string[];
    readonly model?: string;
    readonly platformVersion?: string;
    /** @deprecated in favour of fullVersionList */
    readonly uaFullVersion?: string;
    readonly fullVersionList?: NavigatorUABrandVersion[];
    readonly wow64?: boolean;
}

// https://wicg.github.io/ua-client-hints/#dictdef-ualowentropyjson
interface UALowEntropyJSON {
    readonly brands: NavigatorUABrandVersion[];
    readonly mobile: boolean;
    readonly platform: string;
}

// https://wicg.github.io/ua-client-hints/#navigatoruadata
interface NavigatorUAData extends UALowEntropyJSON {
    getHighEntropyValues(hints: string[]): Promise<UADataValues>;
    toJSON(): UALowEntropyJSON;
}

const App = () => {

  const [browserInfo, setBrowserInfo] = useState<{type: string; mobile: boolean;} | null>(null); 

  async function getBrowserInfo() {
    // const navig = window.navigator as Navigator;
    // if (navig.userAgentData) {
    //   const uaData = navig.userAgentData;
    //   console.log("Brand:", uaData.brands); // Array of browser brands and versions
    //   console.log("Mobile:", uaData.mobile); // Boolean indicating mobile device
    //   console.log("Platform:", uaData.platform); // Operating system

    //   alert(JSON.stringify(uaData));

    //   setBrowserInfo(uaData);
    // } else {
    //   console.log("User-Agent Client Hints API not supported.");

    //   alert("User-Agent Client Hints API not supported.");
    // }

    const userAgent = navigator.userAgent;

    let type = "";

    if (userAgent.includes("Chrome") && !userAgent.includes("Edg")) {
      // console.log("Browser is Chrome");
      type = "Chrome";
    } else if (userAgent.includes("Firefox")) {
      // console.log("Firefox");
      type = "Firefox";
    } else if (userAgent.includes("Edg")) {
      // console.log("Edge");
      type = "Edge";
    } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
      // console.log("Safari");
      type = "Safari";
    } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
      // console.log("Opera");
      type = "Opera";
    } else {
      // console.log("Browser type unknown or other");
      type = "Browser type unknown or other";
    }

    const mobile = navigator.maxTouchPoints > 1;
    setBrowserInfo({ type, mobile });

    alert(`type: ${type}, is mobile: ${mobile}`);
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
  {
    browserInfo && browserInfo.mobile && <button style={{
      position: "absolute",
      height: "10rem",
      width: "10rem",
      backgroundColor: "red"
    }} onClick={navToApp}>Test</button>
  }
   <LandingPage />
  </>
}

export default App;
