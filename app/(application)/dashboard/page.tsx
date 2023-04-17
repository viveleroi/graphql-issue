import { getClient } from '@/app/utils/apollo'
import { graphql } from '@/gql/gql'
import { gql } from '@apollo/client'
import { useQuery } from '@apollo/client'

const query = graphql('query { greetings }')
console.log('query', query)

const Dashboard = async (): Promise<JSX.Element> => {
  const client = getClient()

  const { data } = await client.query({
    query
  })

  // const { data } = useQuery(query)
  return (
    <main>
      <h2 className='font-title'>Dashboard</h2>
      <p>{data.greetings}</p>
    </main>
  )
}

export default Dashboard
