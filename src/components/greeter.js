import React from 'react';

const Greeter = React.createClass({
    render: function() {
        const { name } = this.props.params;

        return (
            <h1>
                Helloooo {name}
            </h1>
        );
    }
});

export default Greeter
