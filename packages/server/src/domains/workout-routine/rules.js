import error from '../error'
import { DataNotFound } from '../error/errors'

const rules = {
  assignCreatorToWorkoutRoutineData: (data, creatorUser) => {
    if (!creatorUser) {
      throw new DataNotFound(error.constants.FIELD.IS_REQUIRED('createdBy'))
    }

    return {
      ...data,
      createdBy: creatorUser._id
    }
  }
}

export default rules
