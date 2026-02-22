// Take in an array of integers
// If any value appears at least twice, return true
// If every element is distinct, return false

// Input:
const numbers = [];

// Output: true;

const containsDuplicate = (nums) => {
  const seen = new Set();

  for(let i = 0; i < nums.length; i++) {
    if(seen.has(nums[i])) {
      return true;
    }
    seen.add(nums[i])
  }

  return false;
}

console.log(containsDuplicate(numbers));