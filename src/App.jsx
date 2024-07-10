import useCatFact from "./presenter/useCatfacts";
import { fetchCatfact } from "./services/catfactProvider";
import ContrastIcon from "@mui/icons-material/Contrast";
import { useContext } from "react";
import { ThemeContext } from "./components/ThemeContext";
function App() {
  const { fact, error, loading, getFresh } = useCatFact(fetchCatfact);

  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(toggleTheme);
  return (
    <div
      className={`p-3 max-w-lg mx-auto ${
        theme === "light" ? "bg-white" : "bg-black"
      }`}
    >
      <div>
        <ContrastIcon onClick={toggleTheme} />
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold text-center my-7">Cat Fact</h1>
        {loading && <p className="text-center my-7 text-2xl"> Loading...</p>}
        {error && (
          <p className="text-center my-7 text-2xl">
            There is something wrong...{error.message}
          </p>
        )}
        {fact && !loading && !error && <p> {fact}</p>}
        <button
          onClick={getFresh}
          className="  mt-2 shadow-sm rounded-lg border  bg-slate-700 px-3 py-2 text-white hover:opacity-80"
        >
          Refresh
        </button>
      </div>
    </div>
  );
}
export default App;
