import { FatalErrorBoundary } from '@redwoodjs/web'
import { RedwoodApolloProvider, RedwoodProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './index.css'

const App = () => (
  <div>
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider>
        <RedwoodApolloProvider>
          <Routes />
        </RedwoodApolloProvider>
      </RedwoodProvider>
    </FatalErrorBoundary>
  </div>
)

export default App
