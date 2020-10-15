function cloneObject(source: any): object {
  let key;
  let value;
  var clone = Object.create(source);

  for (key in source) {
    if (source.hasOwnProperty(key) === true) {
      value = source[key];

      if (value !== null && typeof value === "object") {
        clone[key] = cloneObject(value);
      } else {
        clone[key] = value;
      }
    }
  }
  return clone;
}

export default cloneObject;
