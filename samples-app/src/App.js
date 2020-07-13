import React from 'react';

export default function App(props) {
  return props.name ? <h1>Hello, {props.name}</h1> : <span>Hey</span>
}
