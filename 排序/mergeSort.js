/**
 * 归并排序
 * 采用了分治和递归的思想
 * 时间复杂度 ：O(nlogn)
 * 每一层归并的时间复杂度是o(n)，归并的最大层数是o(logn+1)
 * 
 * 空间复杂度：o(n)
 * 借用了一个临时数组
 */

let arr = [2, 4, 2, 4, 6, 7]
let temp = new Array(arr.length) //归并需要一个额外的空间
mergeSort(arr, 0, arr.length - 1, temp)

//分+合方法
function mergeSort(arr, left, right, temp) {
    //如果只有一个元素，那么就不需要继续划分
    //只有一个元素的区域，本来就是有序的，只需要被归并即可
    if (left < right) {
        //中间索引
        let mid = Math.floor((left + right) / 2)
        //向左归递归分解
        mergeSort(arr, left, mid, temp)
        //向右递归分解
        mergeSort(arr, mid + 1, right, temp)
        //合并以及排序的部分
        merge(arr, left, mid, right, temp)
    }
}

//合并的方法
/**
 * 
 * @param {排序原始数组} arr 
 * @param {左边有序序列的初始索引} left 
 * @param {中间索引} mid 
 * @param {右边索引} right 
 * @param {做中转的数组} temp 
 */
function merge(arr, left, mid, right, temp) {
    let l_pos = left; //初始化i,左边有序序列的初始索引
    let r_pos = mid + 1; //初始化j,右边有序序列的初始索引
    let t_pos = left; //指向temp数组的当前索引 ---临时数组的下标从左边第一个元素开始

    //合并
    while (l_pos <= mid && r_pos <= right) {
        if (arr[l_pos] < arr[r_pos]) { //左半区第一个元素更小
            temp[t_pos++] = arr[l_pos++]
        } else { //右半区第一个元素更小
            temp[t_pos++] = arr[r_pos++]
        }
    }

    //合并左半区剩余的部分
    while (l_pos <= mid) {
        temp[t_pos++] = arr[l_pos++]
        // temp[t] = arr[i]
        // t++;
        // i++;
    }

    //合并右半区剩余的部分
    while (r_pos <= right) {
        temp[t_pos++] = arr[r_pos++]
    }

    //把临时数组中合并后的元素复制回原来的数组
    while (left <= right) {
        arr[left] = temp[left]
        left++;
    }
}


function merge1(arr) {
    let len = arr.length;
    if (len < 2) {
        return arr;
    }
    let mid = Math.floor(len / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return mergeSort(merge1(left), merge1(right))
}

function mergeSort1(left, right) {
    let result = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }

    while (left.length) {
        result.push(left.shift())
    }

    while (right.length) {
        result.push(right.shift())
    }

    return result;
}