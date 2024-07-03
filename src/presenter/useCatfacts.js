//hook-states, methods

import { useEffect, useState } from "react";

function useCatFact(fetchCatfact) {
  const [fact, setFact] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const getFact = async () => {
    try {
      //returning promise
      const catFact = await fetchCatfact();
      setFact(catFact);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
    // 1 arrow fuction,2. array of dependency
    useEffect(() => getFact(), []);

    return { fact, error, loading };
  };
}

//to use my hook
export default useCatFact;
