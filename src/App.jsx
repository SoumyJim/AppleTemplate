
import Homepage from './components/Homepage';
import GlobalContextsProvider from './components/plasmic/apple/PlasmicGlobalContextsProvider'

function App() {
  return (<GlobalContextsProvider><Homepage /></GlobalContextsProvider>);
}

export default App;
  