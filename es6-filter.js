var newarr = [
    { num: 1, val: 'ceshi', flag: 'aa' },
    { num: 2, val: 'ceshi2', flag: 'aa2'  }
  ]
//   console.log(newarr.filter(item => item.num===2 ))
  var arr = ['10','12','23','44','42']
  var newArr = arr.filter(item => item.indexOf('2')<0) 
  console.log(newArr)



  /*数组去重 */
  let arr1=[1,2,3,4,2,4,5];
  let arr2=arr1.filter((x,index,self)=>self.indexOf(x)===index);
  console.log(arr2);