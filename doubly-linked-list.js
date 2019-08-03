const LinkedListNode = require('./linked-list-node.js');

module.exports = class DoublyLinkedList {
	constructor(head = null, tail = null, count = 0) {
		this.head = head;
		this.tail = tail;
		this.count = count;
	}

	addFirst(item) {
		const node = new LinkedListNode(item);
		const temp = this.head;

		this.head = node;
		this.head.next = temp;

		if (this.count === 0) {
			this.tail = this.head;
		} else {
			temp.previous = this.head;
		}

		this.count++;
	}

	addLast(item) {
		const node = new LinkedListNode(item);

		if (this.count === 0) {
			this.head = node;
		} else {
			this.tail.next = node;
			node.previous = this.tail;
		}

		this.tail = node;
		this.count++;
	}

	removeFirst() {}

	removeLast() {}

	remove(item) {}

	[Symbol.iterator]() {}
}