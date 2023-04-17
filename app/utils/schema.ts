import SchemaBuilder from '@pothos/core'

const builder = new SchemaBuilder({})

builder.queryType({
  fields: t => ({
    greetings: t.string({
      resolve: () => `hello`
    })
  })
})

export default builder.toSchema()
