import {useState} from "react";
import PropTypes from "prop-types";

const CounterApp = ({value}) => {
	console.log("Render");
	const [counter, setCounter] = useState(value);

	const handleAdd = () => {
		setCounter(counter + 1);
	};

	const handleSub = () => {
		setCounter(counter - 1);
	};

	const handleReset = () => setCounter(value);
	return (
		<>
			<h1>CounterApp </h1>
			<h3> {counter} </h3>

			<button onClick={handleAdd}>+1</button>
			<button onClick={handleSub}>-1</button>
			<button onClick={handleReset}>Reset</button>
		</>
	);
};
CounterApp.propTypes = {
	value: PropTypes.number.isRequired,
};

export default CounterApp;
