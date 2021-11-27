const uniqueArray = (array: any[], property: any) => {
  return array
    .map((e: any) => e[property])
    .map((e, i, final) => final.indexOf(e) === i && i) // store the keys of the unique objects
    .filter((e: any) => array[e])
    .map((e: any) => array[e]); // eliminate the dead keys & store unique objects
};

export default uniqueArray;
