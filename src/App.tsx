import React, { useState, useEffect } from 'react';
import Countdown from './components/Countdown';
import './App.css';

function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		const bodyElement = document.querySelector('body');
		if (bodyElement) {
			if (isDarkMode) {
				bodyElement.classList.add('dark-mode');
			} else {
				bodyElement.classList.remove('dark-mode');
			}
		}
	}, [isDarkMode]);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const darkModeParam = urlParams.get('dark');
		setIsDarkMode(darkModeParam === 'true');
	}, []);

	return (
		<div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
			<header className="App-header">
				<h1>🎉 YuNii's 18th Birthday Countdown 🍰</h1>
				<button className="dark-mode-toggle" onClick={toggleDarkMode}>
					{isDarkMode ? 'Light Mode' : 'Dark Mode'}
				</button>

				<main>
					<div className="countdown">
						<Countdown />
					</div>
				</main>
			</header>
		</div>
	);
}

export default App;
