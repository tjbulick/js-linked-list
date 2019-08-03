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

		if (count === 0) {
			this.tail = this.head;
		} else {
			temp.previous = this.head;
		}

		this.count++;
	}
	addLast(item) {}
	removeFirst() {}
	removeLast() {}
	remove(item) {}
	[Symbol.iterator]() {}
}