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
	constructor(count = 0, isReadOnly = false) {}

	add(item) {}
	clear() {}
	contains(item) {}
	remove(item) {}
}