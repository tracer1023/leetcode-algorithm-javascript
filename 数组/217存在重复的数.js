/**
 * 给定一个整数数组， 判断是否存在重复元素。
 * 如果存在一值在数组中出现至少两次， 函数返回 true。 如果数组中每个元素都不相同， 则返回 false。
 */


//采用排序的方式
//时间复杂度o(nlog n)
function duplicateBySort(nums) {
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 1; i++) {
        if (num[i] === nums[i + 1]) {
            return true
        }
    }
    return false
}

//利用hash表的方式
//时间复杂度O(n)
function duplicateByHash(nums) {
    let hash = new Set();
    // for of 遍历
    for (let x of nums) {
        if (hash.has(x)) {
            return true
        }
        hash.add(x)
    }
    return false
}