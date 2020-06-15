export const findDraftling = (draftlings=[], draftling_id) =>
  draftlings.find(draftling => draftling.id === draftling_id)