function ListNode(val) {
    this.val = val;
    this.next = null;
}

function makeListNode(vals) {
    let head = new ListNode(vals[0]);
    let current = head;
    let i = 1;
    while (i < vals.length) {
        let val = vals[i];
        current.next = new ListNode(val);
        current = current.next;
        i++;
    }
}

module.exports = ListNode;
module.exports.makeListNode = makeListNode;