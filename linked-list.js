class Node {
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

let first = new Node(3);
let middle = new Node(5);
first.next = middle;
let last = new Node(7);
middle.next = last;

const printList = (node) => {
	while (node !== null) {
		console.log(node.value, node.next);
		node = node.next;
	}
}

printList(first)