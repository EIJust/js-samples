import React, { useState, useEffect, Suspense } from 'react';

import FallBackComponent from './FallBackComponent';

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
      <Suspense fallback={<FallBackComponent />}>
        <LazyComponent />
      </Suspense>
    </div>
  )
}
