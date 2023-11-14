import { Header } from '@/features/header';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/react-query';
import { Main } from './features/products';

function App() {
  return (<>
    <Header />
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  </>
  )
}

export default App
