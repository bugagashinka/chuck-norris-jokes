export const intersectionBy = (list1 = [], list2 = [], prop) => {
  const set = new Set(list1.map((item) => item[prop]));
  return list2.filter((item) => set.has(item[prop])).map((item) => item[prop]);
};
