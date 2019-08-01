class LinkedListNode {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

class LinkedList {
	constructor(head = null, tail = null, count = 0, isReadOnly = false) {
		this.head = head;
		this.tail = tail;
		this.count = count;
		this.isReadOnly = isReadOnly;
	}

	[Symbol.iterator]() {
		let current = this.head;

		return {
			next() {
				if (current !== null) {
					const data = current.value;
					current = current.next;
					return {
						value: data,
						done: false
					}
				} else {
					return {
						done: true
					}
				}
			}
		}
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

	clear() {
		this.head = null;
		this.tail = null;
		this.count = 0;
	}

	contains(item) {
		let current = this.head;
		while (current !== null) {
			if (current.value === item) {
				return true;
			}

			current = current.next;
		}

		return false
	}

	remove(item) {
		let previous = new LinkedListNode(null);
		let current = this.head;

		// 1: Пустой список: ничего не делать
    	// 2: Один элемент: установить Previous = null
    	// 3: Несколько элементов:
    	//    a: Удаляемый элемент первый
    	//    b: Удаляемый элемент в середине или конце

    	while (current !== null) {
    		if (current.value === item) {
    			
    			// Узел в середине или в конце
    			if (previous !== null) {
    				
    				// Случай 3b
    				previous.next = current.next;

    				// Если в конце, то меняем this.tail
    				if (current.next === null) {
    					this.tail = previous;
    				}
    			} else {
    				// Случай 2 или 3a

    				this.head = head.next;

    				// Список теперь пустой?
    				if (this.head === null) {
    					this.tail = null;
    				}
    			}

    			this.count--;

    			return true
    		}

    		previous = current;
    		current = current.next;
    	}

    	return false
	}
}

const printList = (linkedList) => {
	let node = linkedList.head;
	while (node !== null) {
		console.log(`data: ${node.value}, next: ${node.next}`);
		node = node.next;
	}
}

// tests

let linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(2);
linkedList.add(7);

// for-of loop works fine!

for (const data of linkedList) {
	console.log(data)
}