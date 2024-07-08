import { useEffect, useState } from "react";

function useCatFact(fetchCatfact) {
  const [fact, setFact] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getFact = async () => {
    try {
      const catFact = await fetchCatfact();
      setFact(catFact);
      setLoading(false);
      setError(null); //  Reset error state on successful fetch (use null)
    } catch (error) {
      setError(error); // Set the actual error object
      setLoading(false);
    }
  };
  function getFresh() {
    setLoading(true);
    getFact();
  }
  useEffect(() => {
    getFact();
  }, [fetchCatfact]);

  // Immediately call the async function
  // Dependency on fetchCatfact function

  // Return the state values for external use
  return { fact, error, loading, getFresh };
}

export default useCatFact;
