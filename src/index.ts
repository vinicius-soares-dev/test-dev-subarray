function checkSubarraySum(nums: number[], k: number): boolean {
  const remainderMap: Record<number, number> = {0: -1};
  let cumulativeSum = 0;

  for (let i = 0; i < nums.length; i++) {
   cumulativeSum = (cumulativeSum + nums[i]) % k;

   if(remainderMap.hasOwnProperty(cumulativeSum)) {
       if(i - remainderMap[cumulativeSum] > 1) {
           return true;
       }
   } else {
       remainderMap[cumulativeSum] = i;
   }
  }
  return false;
};