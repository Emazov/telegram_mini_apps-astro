import { useState, useEffect } from 'react';
import Grid from './components/grid';

import './App.css';

const fetchHoroscope = async (sign, language) => {
	const response = await fetch('https://poker247tech.ru/get_horoscope/', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			sign,
			language: language === 'ru' ? 'original' : 'translated',
			period: 'today',
		}),
	});

	return response.json();
};

const App = () => {
	const [language, setLanguage] = useState('en');

	// useEffect(() => {
	// 	const telegramLang = window.navigator.language.startsWith('ru')
	// 		? 'ru'
	// 		: 'en';
	// 	setLanguage(telegramLang);
	// }, []);

	const handleSelectSign = async (sign) => {
		const data = await fetchHoroscope(sign.toLowerCase(), language);
		console.log(`${sign} - ${data.horoscope}`);
	};

	return (
		<div>
			<button onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}>
				{language === 'en' ? 'Switch to Russian' : 'Переключить на английский'}
			</button>

			<div>
				<h3>{language === 'en' ? 'Horoscope' : 'Гороскоп'}</h3>
				<Grid handleSelectSign={handleSelectSign} language={language} />
			</div>
		</div>
	);
};

export default App;
