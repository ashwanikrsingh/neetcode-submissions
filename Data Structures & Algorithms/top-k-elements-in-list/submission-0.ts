class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const numFrequency = new Map<number, number>();

        for(let i = 0; i < nums.length; i++) {
            numFrequency.set(nums[i], (numFrequency.get(nums[i]) ?? 0) + 1)
        }

        // const sortedKeys = [...numFrequency.entries()]
        //    .sort((a, b) => b[1] - a[1])  // sort by value descending
        //    .map(entry => entry[0]);
        
        // return sortedKeys.slice(0, k);

        const buckets: number[][] = new Array(nums.length + 1).fill(0).map(() => []);

        for (const [val, freq] of numFrequency.entries()) {
            buckets[freq].push(val);
        }

        // Iterate buckets backwards from nums.length down to 0
        // Step 3: walk buckets from highest frequency down, collecting until we have k
        const result: number[] = [];
        for (let freq = buckets.length - 1; freq >= 0 && result.length < k; freq--) {
            for (const num of buckets[freq]) {
                result.push(num);
                if (result.length === k) break;
            }
        }

        return result;
    }
}
