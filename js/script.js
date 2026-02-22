// Take in an array of integers
// If any value appears at least twice, return true
// If every element is distinct, return false

// Input:
const numbers = [1,2,3,4];

// Output: true;

const containsDuplicate = (nums) => {
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[i] === nums[j]) {
        return true;
      } 
    }
  }
  return false;
}

console.log(containsDuplicate(numbers));