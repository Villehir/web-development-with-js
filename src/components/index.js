import React from 'react';
import HelloWorld from './helloworld.js';
import Counter from './counter.js';
import Counterizer from './counterizer.js';

const Index = React.createClass({

    render: function() {

        const { count, names, onIncrementCounter } = this.props;

        return (

            <div>

                {names.map((name, i) =>
                    <HelloWorld key={i} name={name}/>
                    )}

                <Counterizer
                    {...this.props}
                />

                <Counter count={count}/>

            </div>
        );
    }
});

export default Index
