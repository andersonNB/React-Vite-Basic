// ya no es necesario importarlo
// import React from "react";
import {useState} from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";
// import CounterApp from "../CounterApp";
import "./styles.css";

const GifExpertApp = () => {
	const [img, setImage] = useState("");

	const [categoria, setCategoria] = useState(["Jack Hamma"]);

	const onAddCategoria = (inputValue) => {
		if (categoria.indexOf(inputValue) !== -1) return;

		setCategoria([...categoria, inputValue]);
	};
	console.log("render");
	const apikey = "6pLfEjnR18zDQ74fEZmBuvMgkUDqphyE";

	const fetchApi = () => {
		//COlocamos un doble then por que el primero devuelve una promesa
		// y se pueden concatenar ademas implicitamente retornamos
		// el res por  eso en el segundo then lo podemos imprimir

		const peticion = fetch(
			`https://api.giphy.com/v1/gifs/random?&limit=10&apiKey=${apikey}`
		)
			.then((res) => res.json())
			.then((res) => {
				const {data} = res;
				console.log(data);
				const {images} = data;
				console.log(images.original.url);
				setImage(images.original.url);
			})

			.catch(console.error);
	};

	// console.log(img);
	return (
		<>
			<h2>GifExpertApp</h2>
			{/* Utilizando el state como propiedad */}
			{/* <AddCategory setCategoriaHijo={setCategoria} /> */}
			{/* Emitiendo un evento */}
			<AddCategory onCategoriaHijo={onAddCategoria} />

			<ol>
				{/* Si se utiliza el indice que nos provee el map y eliminamos la posición aun así esa posición sigue existiendo por 
				    lo que nos puede eliminar información que no corresponda
				 */}
				{categoria.map((valor, indice) => {
					console.log(valor, "<->", indice);
					return <GifGrid key={indice.toString()} categoria={valor} />;
				})}
			</ol>

			{/* {categoria.map((valor, indice) => {
					console.log(valor, "<->", indice);
					return <li key={indice.toString()}>{valor}</li>;
				})} */}

			<br />
			<button onClick={fetchApi}>Buscar imagen</button>
			<img src={img} alt="capitalize" />
			{/* <h1>
				<CounterApp value={312}></CounterApp>
			</h1> */}
		</>
	);
};

export default GifExpertApp;
