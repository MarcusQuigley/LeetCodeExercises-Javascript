var missingNumber = (nums)=>{
  if (!nums) return 0;
  // var hasZero=false;
  // if (nums.length==1) {
  //   return nums[0]==0? 1: 0;
  // }

  var subtotal = 0;
  var n = nums.length;
  nums.forEach(element => {
    subtotal+=element;
   // if (hasZero==false && element==0) hasZero = true;
  });
 // if(!hasZero) return 0;
  var total = (n*(n+1))/2;
  return total-subtotal;
}

exports.missingNumber = missingNumber;