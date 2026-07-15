class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let result = '';
        for(let i = 0; i < strs.length; i++) {
            result = `${result}${strs[i].length}#${strs[i]}`;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if(str === '') {
            return [];
        }

        return this.getDecodedString(str);
    }

    private getDecodedString(str: string): string[] {
        let result: string[] = [];
        const delimiterIndex = str.indexOf('#');
        const len = Number(str.substring(0, delimiterIndex));
        const dec = str.substring(delimiterIndex + 1, delimiterIndex + 1 + len);
        const rem = str.substring(delimiterIndex + 1 + len);
        result = [...result, dec];
        if(rem.length > 0) {
           result =  [...result, ...this.getDecodedString(rem)];
        }
        return result;
    }
}
