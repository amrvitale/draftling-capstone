import React from 'react'

export default React.createContext( {
    draftlings: [],
    freeformCrits: [],
    templateCrits: [],
    addDraftling: () => {},
    addFreeformCrit: () => {},
    addTemplateCrit: () => {},
    getCritiquesForDraftlings: () => {},
    deleteDraftling: () => {},
    editDraftling: () => {},
})

