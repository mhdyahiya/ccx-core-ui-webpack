import { Suspense, lazy, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const App = lazy(() => import('./App'));

const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </StrictMode>
);
