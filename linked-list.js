class LinkedListNode {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

const printList = (linkedList) => {
	let node = linkedList.head;
	while (node !== null) {
		console.log(`data: ${node.value}, next: ${node.next}`);
		node = node.next;
	}
}

class LinkedList {
	constructor(head = null, tail = null, count = 0, isReadOnly = false) {
		this.head = head;
		this.tail = tail;
		this.count = count;
		this.isReadOnly = isReadOnly;

	}

	add(item) {
		const node = new LinkedListNode(item);
		if (this.head === null) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
		this.count++
	}

	clear() {}
	contains(item) {}
	remove(item) {}
}

let linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(5);
linkedList.add(7);
console.log(linkedList.count)
printList(linkedList);