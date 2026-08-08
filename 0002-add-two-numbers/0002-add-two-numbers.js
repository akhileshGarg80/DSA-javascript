var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0);
    let curr = head;
    let carry = 0;
    
    while (l1 != null || l2 != null || carry) {
        let sum = carry;
        if (l1) { sum += l1.val; l1 = l1.next; }
        if (l2) { sum += l2.val; l2 = l2.next; }
        
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        carry = sum / 10 | 0;  // Bitwise OR for integer division
    }
    
    return head.next;
};