class LinkedListNode {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

const printList = (node) => {
	while (node !== null) {
		console.log(`data: ${node.value}, next: ${node.next}`);
		node = node.next;
	}
}

class LinkedList {
	constructor(head = null, tail = null, count = 0, isReadOnly = false) {
		this.head = head;
		this.tail = tail;
		this.count = 0;
		this.isReadOnly = isReadOnly;

	}

	add(item) {
		const node = new LinkedListNode(item);
		if (this.head === null) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail.node;
		}
		this.count++
	}

	clear() {}
	contains(item) {}
	remove(item) {}
}

let linkedList = new LinkedList();
linkedList.add(1);
printList(linkedList.head);