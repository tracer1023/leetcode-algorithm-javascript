/**
 * 时间复杂度： O(N * N)
 * 
 * 算法思想： 首先在未排序序列中找到最小（ 大） 元素， 存放到排序序列的起始位置， 然后， 
 * 再从剩余未排序元素中继续寻找最小（ 大） 元素， 然后放到已排序序列的末尾。 以此类推， 直到所有元素均排序完毕。
 * 
 * 稳定性：不稳定
 * 
 * 适用场景： 适用于大多数排序场景， 虽然他的对比次数较多， 但是数据量大的时候， 
 * 他的效率明显优于冒泡， 而且数据移动是非常耗时的， 选择排序移动次数少。
 * 
 */

/**
 * 特点：
 * 1. 表现最稳定的排序算法之一， 无论什么数据进去都是O(n2)的时间复杂度
 * 2.数据规模越小越好
 * 3.唯一的好处是不占用额外的内存空间
 */

function selectionSort(arr) {
    let minIndex, temp
    for (let i = 0; i < len - 1; i++) {
        minIndex = i;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] < arr[minIndex]) { //寻找最小的数
                minIndex = j; // 保存最小数的索引
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}