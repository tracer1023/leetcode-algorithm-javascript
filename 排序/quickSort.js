/**
 * 时间复杂度：
 * 算法思想：快速排序使用分治法来把一个串（ list） 分为两个子串（ sub - lists）
 * 
 * 从数列中挑出一个元素， 称为“ 基准”（ pivot）；
 * 重新排序数列， 所有元素比基准值小的摆放在基准前面， 所有元素比基准值大的摆在基准的后面（ 相同的数可以到任一边）。 
 * 在这个分区退出之后， 该基准就处于数列的中间位置。 这个称为分区（ partition） 操作；
 * 递归地（ recursive） 把小于基准值元素的子数列和大于基准值元素的子数列排序。
 * 
 * 
 * 快速排序是对冒泡排序的一种改进
 * 第一趟是将数据分为2部分，一部分比另一部分的所有数据都要小
 * 然后递归调用，在两边都实行快速排序
 * 
 */

//排序算法的三种实现：左右指针法，挖坑法，前后指针法
//递归实现的方法

// 采用了分治和递归的思想  ---和归并一样
//使用了双指针
function quickSort(arr) {
    if (arr.length < 1) {
        return arr
    }
    let povitIndex = Math.floor(arr.length / 2); //选取标定值位置
    let povit = arr.splice(povitIndex, 1)[0] //返回标定值
    let left = []
    let right = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < povit) { //比标定值小则放入左边数组
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([povit], quickSort(right))

}