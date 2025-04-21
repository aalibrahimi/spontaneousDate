import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createMemoryHistory, createRouter } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './styles/main.css';

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Need this in order for app to see routes during production mode
// Read more: https://tanstack.com/router/latest/docs/framework/react/guide/history-types
const memoryHistory = createMemoryHistory({
  initialEntries: ['/']
})

// Create a new router instance
const router = createRouter({ routeTree, history: memoryHistory })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const queryclient = new QueryClient();

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryclient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>,
  )
}