import { useState } from "react";

export function useFavorites(){

 const [favorites,setFavorites]
 = useState(
  JSON.parse(
   localStorage.getItem("favorites")
  ) || []
 );

 const addFavorite=(manga)=>{

  const updated=[
   ...favorites,
   manga
  ];

  setFavorites(updated);

  localStorage.setItem(
   "favorites",
   JSON.stringify(updated)
  );
 };

 return {
  favorites,
  addFavorite
 };
}