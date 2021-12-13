const stringy = (arr: any) => '' + arr.map(JSON.stringify).sort();

const isEqual = (first: any, second: any) => {
  if (typeof first !== 'object') {
    return first === second;
  }
  if (typeof first === 'object' && !Array.isArray(first)) {
    return JSON.stringify(first) === JSON.stringify(second);
  }
  if (Array.isArray(first)) {
    return stringy(first) === stringy(second);
  }
};

export default isEqual;
