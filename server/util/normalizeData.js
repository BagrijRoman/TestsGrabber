const normalizeData = (dataArr, idFiledName = 'id') =>
  dataArr.reduce((result, dataObj) => {
    const id = dataObj[idFiledName];
    result.dataIndexed[id] = dataObj;
    result.idsList.push(id);
    return result;
  }, { dataIndexed: {}, idsList: [] });

module.exports = normalizeData;
