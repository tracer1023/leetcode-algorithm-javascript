// 给你两个有序整数数组 nums1 和 nums2， 请你将 nums2 合并到 nums1 中， 使 nums1 成为一个有序数组。
// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。 你可以假设 nums1 的空间大小等于 m + n， 这样它就有足够的空间保存来自 nums2 的元素。
// 示例 1：

// 输入： nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
// 输出：[1, 2, 2, 3, 5, 6]

//方法1，使用双向指针
//时间复杂度 O(m+n)
//空间复杂度 O(m+n)
function merge(nums1, m, nums2, n) {
    let p1 = 0,
        p2 = 0
    let sorted = new Array(m + n).fill(0)
    let cur;
    while (p1 < m || p2 < n) { //注意只要有一个满足条件，就说明还没比对完成，注意边界
        if (p1 === m) {
            cur = nums2[p2++]
        } else if (p2 === n) {
            cur = nums1[p1++]
        } else if (nums1[p1] < nums2[p2]) {
            cur = nums1[p1++]
        } else {
            cur = nums2[p2++]
        }
        sorted[p1 + p2 - 1] = cur
    }
    for (let i = 0; i < m + n; i++) { //注意数组的长度边界是2个数组之和
        nums1[i] = sorted[i]
    }
}

//方法二，先合并再排序
//时间复杂度o((m+n)log(m+n))----排序套用快速排序的时间复杂度
//空间复杂度O(log(m+n))，套用快速排序的空间复杂度
function merge2(nums1, m, nums2, n) {
    nums1.splice(m, n, ...nums2)
    nums1.sort((a, b) => a - b)
}