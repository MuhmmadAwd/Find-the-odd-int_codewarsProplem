/**
 * Given an array of integers,
 * find the one that appears an odd number of times.
 * 
 * @param {number[]} Arr 
 * @returns {number} the number that appears an odd number of times.
 */
function findOdd(Arr) {
  let result = null;
  
  Arr.forEach((num)=>{
    let count = Arr.filter((copy)=> copy == num).length
    
    if(count % 2 == 1){
      result = num
    }
  })
  
  return result
}

findOdd