import type { CodegenConfig } from '@graphql-codegen/cli'
import { printSchema } from 'graphql'
import schema from './app/utils/schema'

const config: CodegenConfig = {
  schema: printSchema(schema),
  generates: {
    './gql/': {
      preset: 'client',
      plugins: []
    }
  }
}

export default config
