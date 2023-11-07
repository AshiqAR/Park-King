import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { UserStackScreen, AuthStackScreen } from './Stacks';
import { AuthProvider, useAuth } from './Context/AuthContext';

function Account() {
	const { user } = useAuth();
	if (user) {
		return <UserStackScreen />;
	} else {
		return <AuthStackScreen />;
	}
}

function App() {
	return (
		<AuthProvider>
			<NavigationContainer>
				<Account />
			</NavigationContainer>
		</AuthProvider>
	);
}
export default App;

