/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 给定一个整数数组 nums 和一个整数目标值 target， 请你在该数组中找出 和为目标值 target 的那 两个 整数， 并返回它们的数组下标。
 * 思路：
 * 方法：借用hashMap
 * 利用Map对象的获取key和value的方法，也就是hashMap的思想
 * 时间复杂度O(n)  空间复杂度o(n)
 * 方法二：暴力枚举
 * 也可以两次for循环，使用index
 * 时间复杂度O(n^2),空间复杂度o(1)
 * 
 */
var twoSum = function (nums, target) {
    let map = new Map();
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let another = target - nums[i];
        if (map.has(another) && map.get(another) !== i) {
            result.push(map.get(another), i)
        }
        map.set(nums[i], i)
    }
    return result;
};


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let nums = [-1, 0, 1, 2, -1, -4]
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    console.log('nums', nums)
    let set = new Set();
    let result = [];
    for (var i = 0; i < nums.length - 2; i++) {
        let find = twoSum(nums.slice(i + 1), -nums[i])
        console.log('find', find)
        if (find) {
            find.forEach((arr) => {
                if (!set.has(arr.join(''))) {
                    result.push([nums[i], ...arr])
                }
                set.add(arr.join(''))
            })
        }
    }
    return result;
};
console.log(threeSum(nums))