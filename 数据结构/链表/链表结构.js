function ListNode(val, next) {
    this.val = (val == undefined ? 0 : val)
    this.next = (next == undefined ? 0 : next)

    this.prev = (next == undefined ? 0 : prev) //是为了实现双向链表，单向链表是没有用到
}

class singleList {
    constructor() {
        this.size = 0;
        this.head = new ListNode('head')
        this.currentNode = ''
    }



}