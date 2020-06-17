import React from 'react';
import { useParams } from "react-router-dom";
import DraftlingPage from '../draftlingpage/DraftlingPage'
  
class Edit extends React.Component {
    render() {
        let { id } = useParams();
        return (
            <div className="edit">
                <p>Placeholder for edit view of selected Draftling...</p>
            </div>
        )
    }
}

export default Edit;