import { FatalErrorBoundary } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './index.css'

const App = () => (
  <div className="bg-topography">
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodApolloProvider>
        <Routes />
      </RedwoodApolloProvider>
    </FatalErrorBoundary>
  </div>
)

export default App
