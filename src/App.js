import { IonButton, IonToast, IonIcon } from '@ionic/react';
import { colorPalette } from 'ionicons/icons'
import React, { useState } from 'react';

function App() {
	const [showToast, setShowToast] = useState(false);
	const handleClick = () => {
		setShowToast(true);
		setTimeout(() => setShowToast(false), 1500);
	};

	return (
		<div className="App">
			<IonToast isOpen={showToast} message="My first notification" />
			<IonButton onClick={handleClick}>
				<IonIcon icon={colorPalette} slot='start' />
				My first button
			</IonButton>
		</div>
	);
}

export default App;
