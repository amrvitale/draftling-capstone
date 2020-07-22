import React from 'react';

class Unpublish extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onClick}>
                    Unpublish
                </button>
            </div>
        );
    }
}

export default Unpublish;