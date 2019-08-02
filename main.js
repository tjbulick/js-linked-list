const SinglyLinkedList = require('./singly-linked-list.js');

const printList = (linkedList) => {
	let node = linkedList.head;
	while (node !== null) {
		console.log(`data: ${node.value}, next: ${node.next}`);
		node = node.next;
	}
}

// tests

let singly = new SinglyLinkedList();
singly.add(1);
singly.add(2);
singly.add(2);
singly.add(7);

// for-of loop works fine!

for (const data of singly) {
	console.log(data)
}

// todo: read only
// todo: think of separate types of nodes for singly- and doubly- lists to save the memory