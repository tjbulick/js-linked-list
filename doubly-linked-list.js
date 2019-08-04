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

	removeFirst() {
		if (this.count !== 0) {
			this.head = this.head.next;

			this.count--;

			if (this.count === 0) {
				this.tail = null;
			} else {
				this.head.previous = null;
			}
		}
	}

	removeLast() {
		if (this.count !== 0) {
			if (this.count === 1) {
				this.head = null;
				this.tail = null;
			} else {
				this.tail.previous.next = null;
				this.tail = this.tail.previous;
			}

			this.count--;
		}
	}

	remove(item) {
		let previous = null;
		let current = this.head;

		// Возможные случаи:
		// 1. Список пустой: ничего не делать
		// 2. В списке один узел: предыдущий узел null
		// 3. В списке много узлов:
		// 	a. Узел, который надо удалить, находится в начале
		// 	b. Узел, который надо удалить, находится в середине или в конце

		while (current !== null) {

			// Head -> 3 -> 5 -> 7 -> null
			// Head -> 3 ------> 7 -> null
			if (current.value === item) {

				// It's a node in the middle or end
				if (previous !== null) {

					// Case 3b
					previous.next = current.next;

					// Если это был последний элемент, то обновим указатель tail
					if (current.next === null) {
						this.tail = previous;
					} else {

						// Before: Head -> 3 <-> 5 <-> 7 -> null
						// After:  Head -> 3 <-------> 7 -> null

						// previous = 3
						// current = 5
						// current.next = 7
						// Поэтому 7.previous = 3
						current.next.previous = previous;
					}

					this.count--;
				} else {

					// Case 2 or 3a
					this.removeFirst();
				}

				return true;
			}

			previous = current;
			current = current.next;
		}

		return false;
	}

	[Symbol.iterator]() {}
}