/**
 * 时间复杂度： O(N * N)
 * 排序思想： 通过构建有序序列， 对于未排序数据， 在已排序序列中从后向前扫描， 找到相应位置并插入。
 * 稳定性：稳定
 * 适用场景： 插入排序适用于已有部分数据有序的情况， 有序部分越大越好。
 */
function InsertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let preIndex = i - 1;
        let current = arr[i]; //当前要比较的值current
        while (preIndex > 0 && arr[preIndex] > current) { //比较左侧数组的值是否大于当前值
            arr[preIndex + 1] = arr[preIndex]; //大于的值右移
            preIndex--; //依次向左比较
        }
        arr[preIndex + 1] = current; //找到位置插入比较的值
    }
}