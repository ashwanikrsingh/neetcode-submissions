class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let output: number[] = [];
        for(let i = 0; i < nums.length; i++) {
            let mul = 1;
            for( let j = 0; j < nums.length; j++) {
                if( i === j) {
                    continue;
                }
                mul = mul * nums[j];
            }
            output[i] = mul;
        }

        return output;
    }
}
