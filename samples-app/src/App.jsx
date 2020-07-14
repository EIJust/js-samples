import React, { useState, useEffect, Suspense } from 'react';

import FallBackComponent from './FallBackComponent';
import ErrorBoundary from './ErrorBoundary';
import { theme, ThemeContext } from './context';

const LazyComponent = React.lazy(() => import('./LazyComponent'))

export default function App(props) {
  const [data, setData] = useState(null);

  async function fetchData() {
    const response = await fetch("/someapi");
    setData(await response.json());
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      <ErrorBoundary>
        <Suspense fallback={<FallBackComponent />}>
          <ThemeContext.Provider value={theme}>
            <LazyComponent />
          </ThemeContext.Provider>
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}
