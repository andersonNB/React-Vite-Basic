import {useState} from "react";

const AddCategory = (props) => {
	// console.log(props.setCategoriaHijo);

	const [inputValue, setInputValue] = useState("Black Noir");

	const onInputChange = (e) => {
		const newValue = e.target.value;
		// console.log(newValue);
		setInputValue(newValue);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		// console.log(inputValue);
		if (inputValue.trim().length <= 1) return;

		// props.setCategoriaHijo((categoria) => [...categoria, inputValue]);

		//Para que funcione emitiendo el evento
		props.onCategoriaHijo(inputValue);
		setInputValue("");
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				type="text"
				placeholder="Buscar gifs"
				value={inputValue}
				onChange={(evento) => onInputChange(evento)}
			/>
		</form>
	);
};

export default AddCategory;
