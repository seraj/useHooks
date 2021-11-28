const stringy = (arr: any) => '' + arr.map(JSON.stringify).sort();

const isEqual = (arr1: any, arr2: any) => {
  if (typeof arr1 !== 'object') {
    return arr1 === arr2;
  }
  if (typeof arr1 === 'object' && !Array.isArray(arr1)) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  }
  if (Array.isArray(arr1)) {
    return stringy(arr1) === stringy(arr2);
  }
};

export default isEqual;
