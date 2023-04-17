import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Client = ApolloClient<any>

let client: Client | null = null

export const getClient = (): Client => {
  const httpLink = new HttpLink({
    uri: 'http://localhost:3000/api/graphql'
  })

  /* Create a new client if there's no existing one
     or if we are running on the server. */
  if (!client || typeof window === 'undefined') {
    client = new ApolloClient({
      link: httpLink,
      cache: new InMemoryCache()
    })
  }

  return client
}
