import React, { useState, useEffect } from 'react';

export default function App(props) {
  const [data, setData] = useState(null);

  async function fetchData() {
    const response = await fetch("/someapi");
    setData(await response.json());
  }

  useEffect(() => {
    fetchData();
  });

  return props.name ? <h1>{props.name}</h1> : <span>Hey</span>
}
