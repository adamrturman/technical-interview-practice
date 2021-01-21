//  https://leetcode.com/problems/middle-of-the-linked-list/

//  Given a non-empty, singly linked list with head node head, return a middle node of linked list.
//
// If there are two middle nodes, return the second middle node.

// Example 1:
//
// Input: [1,2,3,4,5]
// Output: Node 3 from this list (Serialization: [3,4,5])
// The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
// Note that we returned a ListNode object ans, such that:
//     ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.

//  Example 2:
//
// Input: [1,2,3,4,5,6]
// Output: Node 4 from this list (Serialization: [4,5,6])
// Since the list has two middle nodes with values 3 and 4, we return the second one.



const middleNode = function(head) {
    //  find the length of the list
    let count = 1;
    let current = head
    while (current.next) {
        current = current.next;
        count++;
    }
    //  Odd length : return the middle node
    if (count % 2 === 1) {
        const oddSteps = (count + 1) / 2
        let oddCount = 1
        let current = head
        while(oddCount < oddSteps ) {
            current = current.next;
            oddCount++;
        }
        return current
        //  Even length: return the second of the middle nodes
    } else {
        const evenSteps = count/2 + 1
        let evenCount = 1
        let current = head
        while (evenCount < evenSteps) {
            current = current.next;
            evenCount++;
        }
        return current
    }
};

