const zodiacSigns = [
	{ name: { en: 'Aries', ru: 'Овен' } },
	{ name: { en: 'Taurus', ru: 'Телец' } },
	{ name: { en: 'Gemini', ru: 'Близнецы' } },
	{ name: { en: 'Cancer', ru: 'Рак' } },
	{ name: { en: 'Leo', ru: 'Лев' } },
	{ name: { en: 'Virgo', ru: 'Дева' } },
	{ name: { en: 'Libra', ru: 'Весы' } },
	{ name: { en: 'Scorpio', ru: 'Скорпион' } },
	{ name: { en: 'Sagittarius', ru: 'Стрелец' } },
	{ name: { en: 'Capricorn', ru: 'Козерог' } },
	{ name: { en: 'Aquarius', ru: 'Водолей' } },
	{ name: { en: 'Pisces', ru: 'Рыбы' } },
];

const Grid = ({ handleSelectSign, language }) => {
	return (
		<ul className='zodiac-block'>
			{zodiacSigns.map((sign, idx) => (
				<li key={idx} onClick={() => handleSelectSign(sign.name.en)}>
					<p>{sign.name[language]}</p> <img src={`./sign-icons-outline/${sign.name.en}.png`} alt='' />
				</li>
			))}
		</ul>
	);
};

export default Grid;
