import useCatFact from "./presenter/useCatfacts";
import { fetchCatfact } from "./services/catfactProvider";

function App() {
  const { fact, error, loading } = useCatFact(fetchCatfact);

  return (
    <main>
      {loading && <p className="text-center my-7 text-2xl"> Loading...</p>}
      {error && (
        <p className="text-center my-7 text-2xl">
          There is something wrong...{error.message}
        </p>
      )}
      {fact && !loading && !error && <p> {fact}</p>}
    </main>
  );
}
export default App;
