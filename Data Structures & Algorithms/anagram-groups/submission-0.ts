class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const dict = new Map<string, string[]>;

        for(let i = 0; i < strs.length; i++) {
            const key = strs[i].split('').sort().join('');

            dict.set(key, [...(dict.get(key) ?? []),strs[i]]);
        }

        return Array.from(dict.values());
    }
}
