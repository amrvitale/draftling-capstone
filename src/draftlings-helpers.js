export const findDraftling = (draftlings=[], draftling_id) =>
  draftlings.find(draftling => draftling.id === draftling_id)

  export const getCritiquesForDraftlings = (critiques =[], draftling_id) => (
   (!draftling_id)
   ? critiques
   : critiques.filter(critique => critique.draftling_id === draftling_id)   
  )
  