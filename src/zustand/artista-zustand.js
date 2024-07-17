import axios from "axios";
import { create } from "zustand";

const useArtistaStore = create((set) => ({
  artistas: [],
  loading: false,
  error: null,
  artistaDetalle: {},
  preview: '',
  artistasBuscados: [],

  getArtistas: async() => {
    set({ loading: true, error: null });
    try {
      const resp = await axios.get('https://api.deezer.com/user/2529/artists')
      set({artistas: resp.data.data, loading: false})
    } catch (error) {
      console.error(error);
    }
  },

  getArtistaDetalle: async (id)=>{
    set({loading: true, error: null})
    try{
      const resp = await axios.get(`https://api.deezer.com/artist/${id}/top?limit=50`)
      set({artistaDetalle: resp.data.data, loading: false})
      return 
    }
    catch(error){
      console.error(error)
    }
  },

  searchArtist: async(nombre) => {
    set({loading: true, error: null});
    try {
      const resp = await axios.get(`https://api.deezer.com/search/artist?q=${nombre}&limit=10`)
      set({artistasBuscados: resp.data, loading: false})
    } catch (error) {
      console.error(error);
    }
  }
}) )

export default useArtistaStore;