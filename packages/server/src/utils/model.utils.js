export const parseSelectList = selectList =>
  selectList.reduce((acc, selection) => acc.concat(` +${selection}`), '')
