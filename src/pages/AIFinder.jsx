import { useState } from "react";
import { recommendManga } from "../services/ai";
import MangaCard from "../components/manga/MangaCard";
import BackButton from "../components/ui/BackButton";
export default function AIFinder() {
  const [prompt, setPrompt] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

 const handleSearch = async () => {
  if (!prompt.trim()) return;

  setLoading(true);

  try {

    // 1 - exact search
    const direct = await fetch(
      `https://api.jikan.moe/v4/manga?q=${encodeURIComponent(prompt)}&limit=5`
    );

    const directJson = await direct.json();


    if (directJson.data?.length) {
      setResults(directJson.data);
      return;
    }


    // 2 - AI recommendation
    const aiResults = await recommendManga(prompt);

    const mangas = [];


    for (const item of aiResults) {

      const res = await fetch(
        `https://api.jikan.moe/v4/manga?q=${encodeURIComponent(item.title)}&limit=3`
      );


      const json = await res.json();


      if(json.data?.length){

        mangas.push(json.data[0]);

      }


      await new Promise(r =>
        setTimeout(r,1000)
      );

    }


    setResults(mangas);


  } catch(err){

    console.error(err);

  } finally {

    setLoading(false);

  }

  };
  return (
    <div className="container mx-auto p-4">
      <BackButton />

<div className="flex flex-col gap-4 mt-12">
  <h1 className="text-2xl font-bold">
    AI Manga Finder
  </h1>

  <textarea
    className="w-full h-16 rounded border p-3 placeholder:text-slate-800 dark:placeholder:text-gray-500  min-w-0  bg-[#72a7a9] dark:bg-slate-800"
    rows={5}
    placeholder="Search for manga..."
    value={prompt}
    onChange={(e) => setPrompt(e.target.value)}
  />

  <button
    onClick={handleSearch} 
    className="w-full rounded bg-teal-600 hover:bg-teal-700 px-4 py-2"
  >
    {loading ? "Loading..." : "Find My Manga"}
  </button>
</div>

      <div className="mt-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((manga) => (
            <MangaCard key={manga.mal_id} manga={manga} />
          ))}
        </div>
      </div>
    </div>
  );
}
