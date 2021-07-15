//创建构造函数HashTable
function hashTable() {
    //初始化hash的记录条数size
    let size = 0;
    //创建对象用于接收键值对
    let res = {}
    //添加关键字，无返回值
    this.add = function (key, value) {
        //判断哈希表中是否存在key，若不存在，则size加1，且赋值
        if (!this.containKey(key)) {
            size++;
        }
        //如果之前不存在，赋值，如果之前存在，则覆盖
        res[key] = value;
    }

    //删除关键字，如果哈希表包含key，并且delete返回true则删除，并使得size减1
    this.remove = function (key) {
        if (this.containKey(key) && (delete res[key])) {
            size--;
        }
    };

    //哈希表是否包含key，返回一个布尔值
    this.containKey = function (key) {
        return (key in res);
    }

    //哈希表是否包含value,返回一个布尔值
    this.containValue = function (value) {
        for (var prop in res) {
            if (res[prop] === value) {
                return true;
            }
        }
        return false;
    }

    //根据键获取value,如果不存在就返回null
    this.getValue = function (key) {
        return this.containKey(key) ? res[key] : null;
    }

    //获取哈希表所有的value,返回一个数组
    this.getAllValues = function () {
        let values = [];
        // values =Object.values(res) 旧环境不兼容
        for (var prop in res) {
            values.push(res[prop])
        }
        return values;
    }

    // 根据值获取hash表中的key,如果不存在就返回null
    this.getKey = function (value) {
        for (var prop in res) {
            if (res[prop] === value) {
                return prop;
            }
        }
        //遍历结束没有return，就返回null
        return null;
    }

    //获取哈希表中所有的key，返回一个数组
    this.getAllKeys = function () {
        var keys = [];
        for (var prop in res) {
            keys.push(prop);
        }
        return keys;
    }

    //获取哈希表中的条数，返回一个数值
    this.getSize = function () {
        return size;
    }

    //清空哈希表，无返回值
    this.clear = function () {
        size = 0;
        res = {};
    }
}