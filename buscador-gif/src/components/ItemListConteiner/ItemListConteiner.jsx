import { useEffect, useState } from "react";
import useApi from "../hooks/useApi"
import Loading from "../../assets/Loading";
import ItemList from "../ItemList/ItemList";


function ItemlistConteiner() {
    const {loading, data, searchGifs}=useApi();
    const [query, setQuery]=useState("");

    useEffect(()=>{
        searchGifs("goku");
    },[])

    const handleSearch = (e)=>{
        e.preventDefault();
        if (query) searchGifs(query)
    }

  return (
    <div className="min-h-screem bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-12">Buscador de Gifs</h1>
            <form className="flex justify-center mb-8" onSubmit={handleSearch}>
                <input 
                    type="text"
                    value={query}
                    onChange={(e)=>setQuery(e.target.value)}
                    placeholder="Buscar gifs"
                    className="w-full max-w-md border border-gray-300 rounded p-3 focus:outline-none focus:ring-2" 
                />
                <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white p-3">
                    Buscar
                </button> 
            </form>
            {loading ? (<Loading/>):(
                <ItemList gifs={data}/>)}
            {!loading && data== 0 && (
                <p className="text-center text-gray-500">No se encontro resultados para la busqueda</p>
            ) } 
        </div>
    </div>
  )
}

export default ItemlistConteiner