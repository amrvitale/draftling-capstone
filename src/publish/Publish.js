import React from 'react';

/* This component renders the Publish button, found on an individual draftling's page when the status is "unpublished" */

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