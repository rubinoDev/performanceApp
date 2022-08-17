import { FormEvent, useState } from "react";

export function Home(){

  const [search, setSearch] = useState('');

  function handleSearch(event : FormEvent){
    event.preventDefault();
  }

  return(
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          onChange={e => setSearch(e.target.value)}
          value={search}
        />

        <button type="submit">
          Buscar
        </button>
      </form>
    </div>
  )
}