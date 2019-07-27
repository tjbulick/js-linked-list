class LinkedListNode {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}

	getValue() {
		return this.value
	}

	setValue(value) {
		this.value = value
	}
}

let first = new LinkedListNode(3);
let middle = new LinkedListNode(5);
first.next = middle;
let last = new LinkedListNode(7);
middle.next = last;

const printList = (node) => {
	while (node !== null) {
		console.log(node.value, node.next);
		node = node.next;
	}
}

printList(first);

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