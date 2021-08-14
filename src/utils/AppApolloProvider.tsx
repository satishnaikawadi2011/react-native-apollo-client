import React from 'react';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, split } from '@apollo/client';
import App from '../App';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

const httpLink = new HttpLink({
	uri: 'http://192.168.43.49:3000/graphql'
});

const wsLink = new WebSocketLink({
	uri: 'ws://192.168.43.49:3000/graphql',
	options:
		{
			reconnect: true
		}
});

const splitLink = split(
	({ query }) => {
		const definition = getMainDefinition(query);
		return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
	},
	wsLink,
	httpLink
);

const client = new ApolloClient({
	link: splitLink,
	cache: new InMemoryCache()
});

export default () => (
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
);
