import React, { useState } from 'react';

const App = () => {
	const [language, setLanguage] = useState('en');

	useEffect(() => {
		const tg = window.Telegram.WebApp;
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
