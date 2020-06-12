import React from 'react'

export default React.createContext( {
    draftlings: [],
    addDraftling: () => {},
    addFreeformCrit: () => {},
    addTemplateCrit: () => {},
    deleteDraftling: () => {},
})