// 给定两个数组， 编写一个函数来计算它们的交集。

/**
 * 示例1
 * 输入： nums1 = [1, 2, 2, 1], nums2 = [2, 2]
 * 输出：[2, 2]
 */
//方法一：使用双指针
function intersect(nums1, nums2) {
    //定义2个指针
    let p1 = 0,
        p2 = 0
    let result = []
    //先对2个数组排序
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    //当有2个数组不为空就继续比对，否则停止求交集
    while (p1 < nums1.length && p2 < nums2.length) {
        //如果第一个数组的值较小，则指针后移
        if (nums1[p1] < nums2[p2]) {
            p1++
        } else if (nums1[p1] > nums2[p2]) {
            p2++
        } else {
            result.push(nums1[p1])
            p1++;
            p2++;
        }
    }
    return result
}

//方法二，利用哈希表
//哈希表存储每个数字出现的次数，对于一个数字，在交集中出现的次数等于该数字在两个数组中出现的次数最小值
//步骤：
//先遍历第一个数组，并在哈希表中记下第一个数组的每个数字以及对应出现的次数
//然后遍历第二个数组，对于第二个数组中的每个数字，如果在哈希表中存在这个数字，则将数字添加到答案中，并减少哈希表中该数字出现的次数
//为了降低空间复杂度，首先遍历较短的数组并在哈希表中记录每个数字出现的次数，然后遍历较长的数组得到交集

function intersect2(nums1, nums2) {
    if (nums1.length == 0 || nums2.length == 0) {
        return []
    }
    //遍历第一个数组的数存储在哈希表中
    let map = new Map();
    //先遍历最小的数
    if (nums1.length > nums2.length) {
        return intersect2(nums2, nums1)
    }

    for (let x of nums1) {
        if (map.has(x)) {
            map.set(x, map.get(x) + 1)
        } else {
            map.set(x, 1)
        }
    }
    //定义结果数组
    let result = []
    //遍历第二个数组从哈希表中查找
    for (let y of nums2) {
        if (map.has(y) && map.get(y) != 0) {
            result.push(y)
            map.set(y, map.get(y) - 1)
        }
    }
    return result
}