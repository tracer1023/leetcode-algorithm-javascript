/**
 * 给定一个排序数组和一个目标值， 在数组中找到目标值， 并返回其索引。 如果目标值不存在于数组中， 返回它将会被按顺序插入的位置。
 * 你可以假设数组中无重复元素。
 * 
 * 示例1
 * 输入: [1, 3, 5, 6], 5
 * 输出: 2
 * 
 * 
 * 示例2
 * 输入: [1, 3, 5, 6], 0
 * 输出: 0
 * 
 * 输入: [1, 3, 5, 6], 7
 * 输出: 4
 * 
 */

/**
 * 
 * 假设目标位置为pos， 对应的成立条件： num[pos - 1] < target <= num[pos]
 */
function findIndexArray(arr, target) {
    let left = 0,
        right = arr.length - 1,
        result = arr.length
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if (target <= arr[mid]) {
            result = mid;
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return result
}

console.log(findIndexArray([2, 4, 5], 7))