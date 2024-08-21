const Block = ({ sign, onClick }) => {
	return (
		<div className='zodiac-block' onClick={onClick}>
			<img src={sign.icon} alt={`${sign.name} icon`} />
			<h3>{sign.name}</h3>
			<p>{sign.dateRange}</p>
		</div>
	);
};

export default Block;