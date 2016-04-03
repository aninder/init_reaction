import React from 'react';

class HelloReact extends React.Component {
    render() {
        return <h1> hello  {this.props.phrase} </h1>;
    }
}

export default HelloReact