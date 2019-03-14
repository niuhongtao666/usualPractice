var arr=[1,2,3,4,3,4,6,5];
/*arr.filter((x,index,self)=>{
    console.log(x+'--'+index+'--'+self);

    1--0--1,2,3,4,3,4,6,5
    2--1--1,2,3,4,3,4,6,5
    3--2--1,2,3,4,3,4,6,5
    4--3--1,2,3,4,3,4,6,5
    3--4--1,2,3,4,3,4,6,5
    4--5--1,2,3,4,3,4,6,5
    6--6--1,2,3,4,3,4,6,5
    5--7--1,2,3,4,3,4,6,5
});*/
var newArr=arr.filter((x,index,self)=>self.indexOf(x)==index);
console.log(newArr);