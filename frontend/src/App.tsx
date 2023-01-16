import React from 'react';
import './App.css';
import { MainSlider } from './pages/HomePage/components/MainSlider/MainSlider.component';
import { Provider } from 'react-redux';
import { store } from './state';

function App() {
	return (
		<Provider store={store}>
			<MainSlider />
		</Provider>
	);
}

export default App;
