var id = 2;

var list = [{
  Id: 1,
  Name: 'a'
}, {
  Id: 2,
  Name: 'b'
}, {
  Id: 3,
  Name: 'c'
}];

var index = list.map(x => {
  return x.Id;
}).indexOf(id);

list.splice(index, 1);
console.log(list);