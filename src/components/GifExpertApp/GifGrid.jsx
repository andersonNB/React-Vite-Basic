import {useState} from "react";
import GifItem from "./GifItem";
import useFetchGifs from "../../hooks/useFetchGifs";
//Otra forma  de colocar la funcion dentro de nuestro componente
// sin que este la reprocese pero si la utilice
// Aunque esta solución no evita que se dispare varias veces la misma
// petición

// const getGifs = async (categoria) => {
// 	const apikey = "6pLfEjnR18zDQ74fEZmBuvMgkUDqphyE";
// 	const url = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${categoria}`;

// 	//En este punto resp es un objeto ReadableStream y en su body trae ese flujo de datos
// 	const resp = await fetch(url);
// 	const {data} = await resp.json();

// 	// console.log(data);

// 	const gifs = data.map((img) => ({
// 		id: img.id,
// 		title: img.title,
// 		url: img.images.downsized_medium.url,
// 	}));

// 	console.log(gifs);
// 	return gifs;
// };

const GifGrid = ({categoria}) => {
	const [counter, setCounter] = useState(10);
	// const [gif, setGif] = useState([]);

	//Esto es un hook por lo tanto sus parametros se envian normalmente y se reciben
	//normalmente, casi contrario con las props
	const {images, isLoading} = useFetchGifs(categoria);

	// Segunda forma
	// const getImages = async () => {
	// 	const newImages = await getGifs(categoria);
	// 	setGif(newImages);
	// };

	// useEffect(() => {
	// 	//Evitamos el recargue varias veces
	// 	// podemos traer nuestras imagenes de dos manera
	// 	//Aquí mismo ya que la función devuelve una promesa
	// 	// o por fuera del effect hacer la logica alla y poner la nueva
	// 	// función aquí
	// 	getGifs(categoria).then((resp) => {
	// 		console.log("Effect: ", resp);

	// 		setGif(resp);
	// 	});

	// 	//Segunda forma
	// 	// getImages
	// }, [categoria]);

	// const apikey = "6pLfEjnR18zDQ74fEZmBuvMgkUDqphyE";

	// // Una forma de hacer la peticion
	// const peticion = fetch(
	// 	`https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${categoria}`
	// )
	// 	.then((response) => response.json())
	// 	.then((response) => {
	// 		// console.log(response);

	// 		const {data} = response;
	// 		setGif(data[0].images.original.url);
	// 	});
	// console.log(peticion);

	//Creamos una funcion asincrona dentro de nuestro componente

	// const getGifs = async () => {
	// 	const url = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${categoria}`;

	// 	//En este punto resp es un objeto ReadableStream y en su body trae ese flujo de datos
	// 	const resp = await fetch(url);
	// 	const {data} = await resp.json();

	// 	// console.log(data);

	// 	const gifs = data.map((img) => ({
	// 		id: img.id,
	// 		title: img.title,
	// 		url: img.images.downsized_medium.url,
	// 	}));

	// 	console.log(gifs);
	// };

	// Directamente puesta aquí la función es mala practica
	// getGifs(categoria);

	return (
		<>
			<div className="card-grid">
				{images.map((gifs) => {
					return <GifItem key={gifs.id} {...gifs} />;
				})}
			</div>

			{/* <img src={gif}></img> */}

			<p>{counter} </p>
			<button onClick={() => setCounter(counter + 1)}>prueba del Effect</button>
		</>
	);
};

export default GifGrid;
