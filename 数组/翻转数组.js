// 旋转数组
//给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
// 进阶：
// 尽可能想出更多的解决方案， 至少有三种不同的方法可以解决这个问题。
// 你可以使用空间复杂度为 O(1) 的 原地 算法解决这个问题吗？
/**
 * 示例 1:

     输入: nums = [1, 2, 3, 4, 5, 6, 7], k = 3
    输出: [5, 6, 7, 1, 2, 3, 4]
    解释:
     向右旋转 1 步: [7, 1, 2, 3, 4, 5, 6]
    向右旋转 2 步: [6, 7, 1, 2, 3, 4, 5]
    向右旋转 3 步: [5, 6, 7, 1, 2, 3, 4]
 */

//方法一：使用额外的数组
//时间复杂度o(n)
//空间复杂度o(n)
function rotate(nums, k) {
    let newArr = []
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        newArr[(i + k) % n] = nums[i]
    }
    for (let i = 0; i < n; i++) {
        nums[i] = newArr[i]
    }
}

//方法二：倒转数组
//1.先翻转所有元素  2.翻转后进行切分，  3.再分别翻转2个子数组
//这样不需要额外的空间
import swap = require("../工具/swap");

function reverse(nums, start, end) {
    while (start < end) {
        swap(nums[start], nums[end])
        start++;
        end--
    }
}

function rotate(nums, k) {
    let len = nums.length
    k %= nums.length
    reverse(nums, 0, len - 1)
    reverse(0, k - 1)
    reverse(k, len - 1)
}