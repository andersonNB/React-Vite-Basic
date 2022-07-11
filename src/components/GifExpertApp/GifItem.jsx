const GifItem = ({id, title, url}) => {
	return (
		<li className="card">
			<p>{title}</p>
			<img src={url} alt={title} />
		</li>
	);
};

export default GifItem;
