import { useEffect, useState } from 'react';

const tg = window.Telegram.WebApp;

const App = () => {
	const [language, setLanguage] = useState('en');

	useEffect(() => {
		tg.ready();

		const userLang = tg.initDataUnsafe.user.language_code;
		setLanguage(userLang === 'ru' ? 'ru' : 'en');
	}, []);

	return (
		<div>
			<button onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}>
				{language === 'en' ? 'Switch to Russian' : 'Переключить на английский'}
			</button>
		</div>
	);
};

export default App;
