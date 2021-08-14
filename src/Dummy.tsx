import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useGetTodosQuery, useTodoAddedSubscription } from './generated/graphql';

type GetTodosType =
	| {
		__typename?: 'Todo' | undefined;
			id: string;
			title: string;
			description: string;
			userId: string;
			user: {
				__typename?: 'User' | undefined;
				username: string;
			};
		}[]
	| undefined;

const Dummy = () => {
	const [
		todos,
		setTodos
	] = useState<GetTodosType>([]);
	const { loading, data } = useGetTodosQuery();
	const { loading:subLoad, data:subData } = useTodoAddedSubscription();

	useEffect(() => {
	if (data) {
	    setTodos(data?.getTodos);
	}
	}, [data])

	useEffect(
		() => {
			if (subData) {
				setTodos((prevState: any) => [
					...prevState,
					subData.todoAdded
				]);
				console.log(data);
			}
		},
		[
			subData
		]
	);

	if (loading) {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Loading ....</Text>
			</View>
		);
	}

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			{todos!.map((todo) => {
				return (
					<View key={todo.id}>
						<Text>{todo.title}</Text>
					</View>
				);
			})}
		</View>
	);
};

export default Dummy;
