import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, split } from '@apollo/client';
import React from 'react';
import { StyleSheet } from 'react-native';
import Dummy from './Dummy';

// const httpLink = new HttpLink({
// 	uri: 'http://192.168.43.49:3000/graphql'
// });

// const wsLink = new WebSocketLink({
// 	uri: 'ws://192.168.43.49:3000/graphql',
// 	options:
// 		{
// 			reconnect: true
// 		}
// });

// const splitLink = split(
// 	({ query }) => {
// 		const definition = getMainDefinition(query);
// 		return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
// 	},
// 	wsLink,
// 	httpLink
// );

// const client = new ApolloClient({
// 	link: splitLink,
// 	cache: new InMemoryCache()
// });

const App: React.FC<{}> = () => {
	return (
		// <ApolloProvider client={client}>
		<Dummy />
		// </ApolloProvider>
	);
};

const styles = StyleSheet.create({
	container:
		{
			flex: 1,
			backgroundColor: '#fff',
			alignItems: 'center',
			justifyContent: 'center'
		}
});

export default App;
