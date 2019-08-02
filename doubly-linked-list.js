const LinkedListNode = require('./linked-list-node.js');

module.exports = class DoublyLinkedList {
	constructor(head = null, tail = null, count = 0) {
		this.head = head;
		this.tail = tail;
		this.count = count;
	}

	addFirst(item) {}
	addLast(item) {}
	removeFirst() {}
	removeLast() {}
	remove(item) {}
	[Symbol.iterator]() {}
}