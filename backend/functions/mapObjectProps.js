function mapObjectProps(objToMap, objType) {
  for (const [key, value] of Object.entries(objToMap)) {
    //console.log(`${key}:${value}`);
    //console.log(typeof(objToMap[key]));
    switch (typeof objToMap[key]) {
      case "string":
        objType[key] = "";

        break;
      case "number":
        objType[key] = 0;
        break;
      case "boolean":
        objType[key] = false;
        break;
      case "object":
        if (Array.isArray(objToMap[key])) {
          objType[key] = [];
          break;
        }
        objType[key] = { ...objType[key] };
        mapObjectProps(objToMap[key], objType[key]);
        break;
      case "undefined":
        objType[key] = "undefined";
        break;
      default:
        objType[key] = undefined;
    }
  }
}

module.exports = mapObjectProps;
