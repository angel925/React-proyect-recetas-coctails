import {useEffect, createContext, useState } from "react";
import axios from 'axios'

//Crear el context

export const CategoriasContext = createContext();

//provider es donde se encuentran las funciones y el state

const CategoriasProvider = (props) => {
  // se crea el satate del context
  const [categorias, guardarCategorias] = useState([]);

  //ejecutar el llamado a la api
  useEffect(()=>{
    const obtenerCategorias = async () => {

      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'; 

      const categorias = await axios.get(url)

      guardarCategorias(categorias.data.drinks)
    }
    obtenerCategorias();
  },[]);

  return (
    <CategoriasContext.Provider
      /* Dentro de value se colocan los props que quieres que esten disponibles para los 
        componentes  de manera global*/
      value={{
        categorias
      }}
    >
      {props.children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;
