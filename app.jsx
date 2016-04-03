import React from 'react';
import HelloReact from './helloreact';
import ReactDom from 'react-dom'

ReactDom.render(
    <HelloReact phrase="42" />,
    document.getElementById("con")
);