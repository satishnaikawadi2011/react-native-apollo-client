import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  user: User;
  token: Scalars['String'];
};

export type CreateTodoInput = {
  title: Scalars['String'];
  description: Scalars['String'];
};

export type CreateUserInput = {
  username: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
};


export type Mutation = {
  __typename?: 'Mutation';
  createTodo: Todo;
  registerUser: AuthResponse;
  signinUser: AuthResponse;
  removeUser: User;
  updateUser: User;
};


export type MutationCreateTodoArgs = {
  createTodoInput: CreateTodoInput;
};


export type MutationRegisterUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationSigninUserArgs = {
  signinUserInput: SigninUserInput;
};


export type MutationRemoveUserArgs = {
  id: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  updateUserInput?: Maybe<UpdateUserInput>;
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getTodos: Array<Todo>;
  getUser: User;
  me: User;
};


export type QueryGetUserArgs = {
  id: Scalars['String'];
};

export type SigninUserInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  todoAdded: Todo;
};

export type Todo = {
  __typename?: 'Todo';
  id: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  userId: Scalars['String'];
  user: User;
};

export type UpdateUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  todos: Array<Todo>;
};

export type GetTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodosQuery = { __typename?: 'Query', getTodos: Array<{ __typename?: 'Todo', id: string, title: string, description: string, userId: string, user: { __typename?: 'User', username: string } }> };

export type TodoAddedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type TodoAddedSubscription = { __typename?: 'Subscription', todoAdded: { __typename?: 'Todo', id: string, title: string, description: string, user: { __typename?: 'User', username: string } } };


export const GetTodosDocument = gql`
    query GetTodos {
  getTodos {
    id
    title
    description
    user {
      username
    }
    userId
  }
}
    `;

/**
 * __useGetTodosQuery__
 *
 * To run a query within a React component, call `useGetTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTodosQuery(baseOptions?: Apollo.QueryHookOptions<GetTodosQuery, GetTodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, options);
      }
export function useGetTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodosQuery, GetTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, options);
        }
export type GetTodosQueryHookResult = ReturnType<typeof useGetTodosQuery>;
export type GetTodosLazyQueryHookResult = ReturnType<typeof useGetTodosLazyQuery>;
export type GetTodosQueryResult = Apollo.QueryResult<GetTodosQuery, GetTodosQueryVariables>;
export const TodoAddedDocument = gql`
    subscription TodoAdded {
  todoAdded {
    id
    title
    description
    user {
      username
    }
  }
}
    `;

/**
 * __useTodoAddedSubscription__
 *
 * To run a query within a React component, call `useTodoAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useTodoAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodoAddedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useTodoAddedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<TodoAddedSubscription, TodoAddedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<TodoAddedSubscription, TodoAddedSubscriptionVariables>(TodoAddedDocument, options);
      }
export type TodoAddedSubscriptionHookResult = ReturnType<typeof useTodoAddedSubscription>;
export type TodoAddedSubscriptionResult = Apollo.SubscriptionResult<TodoAddedSubscription>;