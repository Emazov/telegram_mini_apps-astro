const Block = ({ sign, onClick }) => {
	return (
		<div className='zodiac-block' onClick={onClick}>
			
			<h3>{sign.name}</h3>
			<p>{sign.dateRange}</p>
		</div>
	);
};

export default Block;