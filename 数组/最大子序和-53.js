/**
 * 给定一个整数数组 nums， 找到一个具有最大和的连续子数组（ 子数组最少包含一个元素）， 返回其最大和。
 * 
 * 输入： nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
 * 输出： 6
 * 解释： 连续子数组[4, -1, 2, 1] 的和最大， 为 6。
 */
/**
 * 原理分析：利用动态规划的思想
 * 假设f(i)为以第i个数结尾的最大子序和
 * 则 max{f(i)}即为要求的结果
 * 而f(i)取决于num[i]和num[i]+f(i-1)中的最大值
 * 所以得到动态转换方程
 * f(i)=max{f(i-1)+num[i],num[i]}
 * 则得到一个时间复杂度o(n),空间复杂度o(n)的实现，用一个f数组保存f(i),用一个变量pre来保存相对于当前f(i)的f(i-1)的值
 */
function solution(nums) {
    let pre = 0,
        maxResult = nums[0]
    nums.forEach(element => {
        pre = Math.max(pre + element, element) //循环遍历得到f(i)
        maxResult = Math.max(maxResult, pre) //得到最大的f(i)
    });
    return maxResult
}