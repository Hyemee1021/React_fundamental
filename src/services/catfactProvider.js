export const fetchCatfact = async () => {
  const res = await fetch("https://catfact.ninja/fact");
  // res = {"fact":"According to Hebrew legend, Noah prayed to God for help protecting all the food he stored on the ark from being eaten by rats. In reply, God made the lion sneeze, and out popped a cat.","length":184} -json

  //fetch return promise->wait til promise to fulfill
  const data = await res.json();

  //json -> js obj
  return data.fact;
};
