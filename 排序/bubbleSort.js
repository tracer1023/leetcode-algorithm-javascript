// import swap from '../工具/swap';

const swap = require("../工具/swap");

/**
 * 时间复杂度： O(N * N)
 * 排序思想： 将待排序的元素看作是竖着排列的“ 气泡”， 较小的元素比较轻， 从而要往上浮
 * 稳定性：稳定
 * 适用场景： 适用于数据量很小的排序场景， 因为冒泡原理简单
 */
let arrList = [1, 7, 3, 4, 2, 3, 6]

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) { //相邻元素两两对比
                let temp = arr[j + 1]; //元素交换
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
            console.log('第%d遍第%d躺第结果：', i + 1, j + 1);
            console.log(arr);
        }
        console.log('第%d遍的最终结果：', i + 1);
        console.log(arr);

    }
    return arr;
}
// bubbleSort(arrList)

/**
 * 算法的第一次优化
 * 假设当一个数组需要执行5次循环，但是当执行完第3次循环当时候，数组就已经完成排序了，此时程序还要继续执行2次循环比较
 * 这就是多余的操作了，为了解决这个问题，可以增加一个标志位，表示当前第i趟循环是否有交换，有则执行i+1趟循环，否则不执行
 * 
 */
function bubbleSortOpt1(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let flag = 1;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                flag = 0; //发生交换，标志位置0
            }
            console.log('第%d遍第%d躺第结果：', i + 1, j + 1);
            console.log(arr);

        }
        if (flag == 1) {
            return;
        }
        console.log('第%d遍的最终结果：', i + 1);
        console.log(arr);
    }
}
// bubbleSortOpt1(arrList)

/**
 * 问题：在冒泡排序中还有一个问题存在， 就是第 i 趟排的第 i 小或者大的元素已经在第 i 位上了， 
 * 甚至可能第 i - 1 位也已经归位了， 那么在内层循环的时候， 有这种情况出现就会导致多余的比较出现
 * 
 * 通过上面内循环的打印结果，可以看到第二遍第第一趟和第二趟都结果一致，在地1趟时就没有交换了
 * 
 * 解决措施： 利用一个标志位， 记录一下当前第 i 趟所交换的最后一个位置的下标， 在进行第 i + 1 趟的时候， 
 * 只需要内循环到这个下标的位置就可以了， 因为后面位置上的元素在上一趟中没有换位
 */
function bubbleSortOpt2(arr) {
    let tempPosition = 0;
    let len = arr.length - 1;
    let count = 0;
    //要遍历都次数
    for (let i = 0; i < arr.length - 1; i++) {
        let flag = 1;
        //依次比较两个相邻位置都大小，遍历一次后，把数组中第i小的数放在第i的位置上
        for (let j = 0; j < len; j++) {
            if (arr[j + 1] < arr[j]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                flag = 0; //发生交换，标志位置0
                tempPosition = j; //记录交换位置
            }
            console.log('第%d遍第%d躺第结果：', i + 1, j + 1);
            console.log(arr);
        }
        len = tempPosition; //把最后一次交换的位置给len，缩减内循环的次数
        console.log('第%d遍的最终结果：', i + 1);
        console.log(arr);
        if (flag == 1) { //如果没有交换过元素，则已经有序
            return;
        }
    }
    console.log('循环次数', count);

}
bubbleSortOpt2(arrList)

function bubble(arr) {
    let len = arr.length;
    let flg = 0
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j]) {
                swap(arr[i], swap[j])
                flag = 1
            }
        }
    }
}