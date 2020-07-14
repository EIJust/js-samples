import React from 'react';

import { ThemeContext } from './context';

export default function LazyComponent() {
    return (
        <ThemeContext.Consumer>
            {
                value => {
                    console.log(value);
                    return <div></div>
                }}
        </ThemeContext.Consumer>
    )
}