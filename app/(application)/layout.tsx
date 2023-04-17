import { type NextPage } from 'next'
import { type PropsWithChildren } from 'react'

const ApplicationLayout: NextPage = ({ children }: PropsWithChildren) => (
  <>
    <head />
    <body>
        {children}
    </body>
  </>
)

export default ApplicationLayout
