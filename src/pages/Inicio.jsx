import useArtistaStore from "../zustand/artista-zustand";
import Navbar from "../components/Navbar.jsx";
import { useEffect } from "react";
import CardArtista from "../components/CardArtista.jsx";

const Inicio = () => {
  const { artistas, loading, error, getArtistas } = useArtistaStore();

  useEffect(() => {
    getArtistas();
  }, []);

  return (
    <div className="bg-neutral-900 min-h-screen">
      <Navbar />
      <div className="flex flex-wrap gap-4">
        <CardArtista />
      </div>
    </div>
  );
};

export default Inicio;
