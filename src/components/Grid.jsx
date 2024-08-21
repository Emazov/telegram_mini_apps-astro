import Block from './Block';

const zodiacSigns = [
	{ name: 'Овен', dateRange: '21 марта - 19 апреля' },
	{ name: 'Телец', dateRange: '20 апреля - 20 мая' },
];

const Grid = () => {
	return (
		<div className='zodiac-grid'>
			{zodiacSigns.map((sign) => (
				<Block
					key={sign.name}
					sign={sign}
					onClick={() => onSelectSign(sign.name)}
				/>
			))}
		</div>
	);
};

export default Grid;
