/**
 * 有序数组的平方
 * 给你一个按 非递减顺序 排序的整数数组 nums， 返回 每个数字的平方 组成的新数组， 要求也按 非递减顺序 排序。
 */
// 示例 1：

// 输入： nums = [-4, -1, 0, 3, 10]
// 输出：[0, 1, 9, 16, 100]
// 解释： 平方后， 数组变为[16, 1, 0, 9, 100]
// 排序后， 数组变为[0, 1, 9, 16, 100]

//快速排序
function sortedSquare(nums) {
    let result = []
    for (let i = 0; i < nums.length - 1; i++) {
        result[i] = nums[i] * nums[i]
    }
    //V8 引擎sort函数只给出2中排序，InsertionSort和QuickSort,数量小于10的数组使用InsertionSort，比10大的数组使用QuickSort
    result.sort((a, b) => a - b)

}