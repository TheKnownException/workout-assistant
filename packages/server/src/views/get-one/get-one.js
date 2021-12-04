const getOne = async (domain, filter) => {
  const data = await domain.controller.getOne(filter)
  return data
}

export default getOne
