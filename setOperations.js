// Aim at solving the problem that many array need to implement different set operations such as union or intersections etc

const setOperations = (arr1, arr2, method) => {
  if (method==="and") {
    return arr1.filter((x) => arr2.includes(x));
  } else if (method==="diff") {
    return arr1.filter((x) => !arr2.includes(x));
  } else if (method==="or") {
    return [...new Set([...arr1, ...arr2])];
  } else {
    console.log("method is error");
  }
}

const arrays = [
  {id:2, data:[2,3,4,5,6]},
  {id:1, data:[1,2,3,4,5]},
  {id:3, data:[3,4,5,6,7]},
  {id:4, data:[4,5,6,7,8]}
];

const methods = [
  {id:1, method:"or"},
  {id:2, method:"and"},
  {id:3, method:"diff"}
];

const result = arrays
  .sort((a, b) => parseInt(a.id) - parseInt(b.id))
  .reduce((acc, cur) => {
      const singleMethod = methods.filter((method) => method.id===acc.id)[0];
      const newData = setOperations(acc.data, cur.data, singleMethod.method);
      console.log({id: acc.id+1, data: newData}); // 查看过程
      return {id: acc.id+1, data: newData};
  });

console.log(result);