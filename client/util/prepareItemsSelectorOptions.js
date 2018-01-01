export const prepareItemsSelectorOptions = (list, textFieldName, valueFieldName) =>
  list.map(item => ({ text:item[textFieldName], value:item[valueFieldName] }));
