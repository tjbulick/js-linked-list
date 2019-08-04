const SinglyLinkedList = require('./singly-linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

const printList = (linkedList) => {
	let node = linkedList.head;
	while (node !== null) {
		console.log(`data: ${node.value}, next: ${node.next}`);
		node = node.next;
	}
}

// tests

console.log('singly:');
let singly = new SinglyLinkedList();
singly.add(1);
singly.add(2);
singly.add(2);
singly.add(7);

// for-of loop works fine!

for (const data of singly) {
	console.log(data)
}

console.log('doubly:');

let doubly = new DoublyLinkedList();
doubly.addFirst(8);
doubly.addFirst(8);
doubly.addFirst(4);
doubly.addFirst(1);
doubly.addLast(777);
doubly.addFirst(555);
doubly.addLast(3);
doubly.removeLast();
doubly.remove(1);
doubly.remove(4);


printList(doubly);

// todo: read only
// todo: think of separate types of nodes for singly- and doubly- lists to save the memory