import {LinkedListNode} from './linked-list-node.js';

const printList = (linkedList) => {
	let node = linkedList.head;
	while (node !== null) {
		console.log(`data: ${node.value}, next: ${node.next}`);
		node = node.next;
	}
}

// tests

let linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(2);
linkedList.add(7);

// for-of loop works fine!

for (const data of linkedList) {
	console.log(data)
}