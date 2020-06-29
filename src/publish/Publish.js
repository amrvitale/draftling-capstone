import React from 'react'

class Publish extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onClick}>
                    Publish
                </button>
            </div>
        );
    }
}

export default Publish;