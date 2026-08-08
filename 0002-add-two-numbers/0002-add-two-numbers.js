var addTwoNumbers = function(l1, l2) {
    const head = new ListNode(0);
    let curr = head;
    let carry = 0;
    
    while (l1 || l2 || carry) {
        const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
        carry = sum > 9 ? 1 : 0;
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        l1 = l1?.next || null;
        l2 = l2?.next || null;
    }
    
    return head.next;
};