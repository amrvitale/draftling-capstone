import React from 'react';

/* This component renders the Unpublish button, found on an individual draftling's page when the status is "published" */

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