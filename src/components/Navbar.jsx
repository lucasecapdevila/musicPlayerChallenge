import React, { useState } from "react";

const Navbar = () => {
    const [busqueda, setBusqueda] = useState('')

  return (
    <div className="bg-neutral-800 flex h-20 items-center shadow-sm shadow-white px-4">
      <div className="w-1/3 text-white font-semibold text-2xl">
        <p>DEEZER</p>
      </div>
      <div className="w-1/3">
        <input
          type="search"
          name=""
          id=""
          placeholder="Buscar..."
          className="h-10 p-2 w-full rounded-md"
          onChange={(e)=> setBusqueda(e.target.value)}
        />
      </div>
      <div className="w-1/3 flex text-white gap-4 justify-end text-lg">
        <p>Home</p>
        <p>Top 10</p>
        <p>Favoritos</p>
      </div>
    </div>
  );
};

export default Navbar;
