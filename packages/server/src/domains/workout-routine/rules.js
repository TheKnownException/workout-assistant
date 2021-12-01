const rules = {
  assignCreatorToWorkoutRoutineData: (data, creatorUser) => ({
    ...data,
    createdBy: creatorUser._id
  })
}

export default rules
