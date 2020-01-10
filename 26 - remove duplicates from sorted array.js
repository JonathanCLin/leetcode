// Given a sorted array nums, remove the duplicates in-place 
// such that each element appear only once and return the new length.

// Do not allocate extra space for another array, 
// you must do this by modifying the input array in-place with O(1) extra memory.


var removeDuplicates = function(nums) {
    let numsSet = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (!numsSet.has(nums[i])) {
            numsSet.add(nums[i]);
        } else {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};

var removeDuplicates = function (nums) {
  var i = 0;
  nums.forEach(function (elem) {
      if (elem !== nums[i]) {
          nums[++i] = elem;
      }
  });
  return nums.length && i + 1;
};