import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCell from "../data";

export const FeatureFlagContex = createContext(null);

export default function FeatureFlagGlobalState({ children }) {

    const [loading, setLoading] = useState(true);
    const [enableFlag, setEnableFlag] = useState({});

    async function fetchFeatureFlag(){
        try {
            const response = await featureFlagsDataServiceCell();
            console.log(response);
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

    useEffect(() => {
        fetchFeatureFlag();
    },[])

  return (
    <FeatureFlagContex.Provider value={{}}>
      {children}
    </FeatureFlagContex.Provider>
  );
}
