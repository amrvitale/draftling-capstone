import React from 'react'

export default React.createContext( {
    draftlings: [],
    freeformCrits: [],
    templateCrits: [],
    addDraftling: () => {},
    addFreeformCrit: () => {},
    addTemplateCrit: () => {},
    fetchFreeformCritiques: () => {},
    fetchTemplateCritiques:() => {},
    deleteDraftling: () => {},
    editDraftling: () => {},
})

