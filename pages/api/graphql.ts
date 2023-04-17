import type { NextApiRequest, NextApiResponse } from 'next'
import { createYoga } from 'graphql-yoga'
import schema from '@/app/utils/schema'

export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false
  }
}

export default createYoga<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  schema,
  // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
  graphqlEndpoint: '/api/graphql'
})
