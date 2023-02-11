`use strict`;
let obj = [
  {
    id: 3,
    name: "good Book",
    author: "good author",
  },
  {
    id: 4,
    name: "ok Book",
    author: "ok author",
  },
  {
    id: 2,
    name: "not bad Book",
    author: "not bad author",
  },
  {
    id: 1,
    name: "great book",
    author: "great author",
  },
];
const sort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j].id > key.id) {
      array[j + 1] = array[j];
      j -= 1;
    }
    array[j + 1] = key;
  }
};
const disp = (obj) => {
  for (let i = 0; i < obj.length; i++) {
    console.log(obj[i].id);
    console.log(obj[i].name);
    console.log(obj[i].author);
  }
};
sort(obj);
disp(obj);
