import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = (categoria) => {

    const [gif, setGif] = useState([]);


    useEffect(() => {
        //Evitamos el recargue varias veces
        // podemos traer nuestras imagenes de dos manera
        //Aquí mismo ya que la función devuelve una promesa
        // o por fuera del effect hacer la logica alla y poner la nueva
        // función aquí
        getGifs(categoria).then((resp) => {
            // console.log("Effect: ", resp);

            setGif(resp);
        });

        //Segunda forma
        // getImages
    }, [categoria]);


    return {
        images: gif,
        isLoading: false
    }
}

export default useFetchGifs