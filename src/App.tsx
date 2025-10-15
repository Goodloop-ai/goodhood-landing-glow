import LandingPage from "./LandingPage";
import './App.css';
import { useEffect } from "react";

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

async function getBrowserInfo() {
  const navig = window.navigator as Navigator;
  if (navig.userAgentData) {
    const uaData = navig.userAgentData;
    console.log("Brand:", uaData.brands); // Array of browser brands and versions
    console.log("Mobile:", uaData.mobile); // Boolean indicating mobile device
    console.log("Platform:", uaData.platform); // Operating system
    
    const highEntropyValues = await uaData.getHighEntropyValues(["architecture", "model", "platformVersion", "uaFullVersion"]);
    console.log("Full Version:", highEntropyValues.uaFullVersion);
    console.log("Platform Version:", highEntropyValues.platformVersion);
  } else {
    console.log("User-Agent Client Hints API not supported.");
  }
}

const App = () => {

  useEffect(() => {
    getBrowserInfo();
  }, [])

  return <>
   <LandingPage />
  </>
}

export default App;
