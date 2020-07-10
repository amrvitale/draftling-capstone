export const findDraftling = (draftlings=[], draftling_id) =>
  draftlings.find(draftling => draftling.id === draftling_id)

  export const getFreeformCrits = (freeformCrits =[], draftling_id) => (
   (!draftling_id)
   ? freeformCrits
   : freeformCrits.filter(freeformcrit => freeformCrits.draftling_id === draftling_id)   
  )
  