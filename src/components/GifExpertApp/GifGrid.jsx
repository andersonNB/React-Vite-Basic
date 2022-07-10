import {useState} from "react";
const GifGrid = ({categoria}) => {
	const [gif, setGif] = useState("");

	const apikey = "6pLfEjnR18zDQ74fEZmBuvMgkUDqphyE";

	const peticion = fetch(
		`https://api.giphy.com/v1/gifs/search?q=${categoria}&api_key=${apikey}`
	)
		.then((response) => response.json())
		.then((response) => {
			console.log(response);

			const {data} = response;
			setGif(data[0].images.original.url);
		});
	// console.log(peticion);

	return (
		<>
			<h3>{categoria}</h3>
			<img src={gif}></img>
		</>
	);
};

export default GifGrid;
