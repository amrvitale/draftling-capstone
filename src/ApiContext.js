import React from 'react'

export default React.createContext( {
    draftlings: [],
    addDraftling: () => {},
    addFreeformCrit: () => {},
    addTemplateCrit: () => {},
    deleteDraftling: () => {},
    editDraftling: () => {},
    readDraftling: () => {},
    readCrit: () => {},
})

//wait, would read and edit be from an array? ...so confused
//array of crits go inside array of draftling somehow without messing up ID