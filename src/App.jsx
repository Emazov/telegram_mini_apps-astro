import { useState, useEffect } from 'react';
import Block from './components/Block';
import Info from './components/Info';

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
	const [selectedSign, setSelectedSign] = useState(null);
	const [horoscope, setHoroscope] = useState(null);

	useEffect(() => {
		const telegramLang = window.navigator.language.startsWith('ru')
			? 'ru'
			: 'en';
		setLanguage(telegramLang);
	}, []);

	const handleSelectSign = async (sign) => {
		setSelectedSign(sign);
		const data = await fetchHoroscope(sign.toLowerCase(), language);
		setHoroscope(data);
	};

	const handleBack = () => {
		setSelectedSign(null);
		setHoroscope(null);
	};

	return (
		<div>
			<button onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}>
				{language === 'en' ? 'Switch to Russian' : 'Переключить на английский'}
			</button>

			{!selectedSign ? (
				<Block onSelectSign={handleSelectSign} />
			) : (
				<Info horoscope={horoscope} onBack={handleBack} />
			)}
		</div>
	);
};

export default App;
