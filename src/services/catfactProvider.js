export const fetchCatfact = async () => {
  // res = {"fact":"According to Hebrew legend, Noah prayed to God for help protecting all the food he stored on the ark from being eaten by rats. In reply, God made the lion sneeze, and out popped a cat.","length":184} -json

  //fetch return promise->wait til promise to fulfill
  try {
    const res = await fetch("https://catfact.ninja/fact");

    // Check for network errors (e.g., connection refused, DNS error)
    if (!res.ok) {
      throw new Error("Failed to fetch cat fact");
    }
    const data = await res.json();
    //json()-> makes json to object
    return data.fact; // Extracting the fact from the response
  } catch (error) {
    // Handle specific errors or log them for debugging
    console.error("Error fetching cat fact:", error.message);
    throw new Error("Failed to fetch cat fact");
  }
};
