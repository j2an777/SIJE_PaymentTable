import { QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import React from 'react';

import makeQueryClient from './utils/makeQueryClient';
import App from './App';

async function enableMocking() {
  if (import.meta.env.MODE === 'development') {
    const { worker } = await import('./mocks/browser');
    await worker.start();
  }
}

enableMocking().then(() => {
  const root = createRoot(document.getElementById('root')!);
  const queryClient = makeQueryClient();

  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>
  );
});
