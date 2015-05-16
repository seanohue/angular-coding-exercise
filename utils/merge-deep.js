const extend = (base, extender) => {
  for (let prop in extender) {
    let extendVal = extender[prop];

    if (extender.hasOwnProperty(prop)) {
      if (
        typeof base[prop] === 'undefined' ||
        typeof extendVal !== 'object' ||
        extendVal instanceof Array
      ) {
        base[prop] = extendVal;
      } else {
        base[prop] = extend(base[prop], extendVal);
      }
    }
  }
  return base;
};

module.exports = extend;
