export const findDraftling = (draftlings=[], draftling_id) =>
  draftlings.find(draftling => draftling.id === draftling_id)


   
  export const getCritiquesForDraftlings = (draftling_id) => {
    let templateCrits = this.context.templateCrits || [];
    let freeformCrits = this.context.templateCrits || [];
    
    return (!draftling_id)
    ? templateCrits.concat(freeformCrits)
    : templateCrits.filter(templateCrit => templateCrit.draftling_id === draftling_id).concat(freeformCrits.filter(freeformCrit => freeformCrit.draftling_id === draftling_id));
    }