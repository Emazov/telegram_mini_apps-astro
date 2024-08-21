import Block from './Block';

const zodiacSigns = [
	{ name: 'Овен', icon: 'aries.png', dateRange: '21 марта - 19 апреля' },
	{ name: 'Телец', icon: 'taurus.png', dateRange: '20 апреля - 20 мая' },
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
