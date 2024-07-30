import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCell from "../data";

export const FeatureFlagContex = createContext(null);

export default function FeatureFlagGlobalState({ children }) {

    const [loading, setLoading] = useState(false);
    const [enableFlag, setEnableFlag] = useState({});

    async function fetchFeatureFlag(){
        try {
            setLoading(true)
            const response = await featureFlagsDataServiceCell();
            setEnableFlag(response);
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false);
            throw new Error(error)
        }
    }

    useEffect(() => {
        fetchFeatureFlag();
    },[])

    if(loading){
        return <h1>Data loading, Please wait...</h1>
    }

  return (
    <FeatureFlagContex.Provider value={{loading, enableFlag}}>
      {children}
    </FeatureFlagContex.Provider>
  );
}
