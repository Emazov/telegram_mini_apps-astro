const Info = ({ horoscope, onBack }) => {
	return (
		<div className='horoscope-details'>
			<button onClick={onBack}>Назад</button>
			<h2>{horoscope.sign}</h2>
			<p>{horoscope.description}</p>
		</div>
	);
};

export default Info