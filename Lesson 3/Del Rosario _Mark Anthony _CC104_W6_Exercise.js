'use strict';


console.log('CAMPUS IT SUPPORT REQUEST MANAGER');


// ================================================================
// PART A: STACK
// ================================================================


class Stack {
  constructor() {
    // Internal array storage for stack elements
    this.items = [];
  }


  // Add an element to the top of the stack
  push(element) {
    this.items.push(element);
  }


  // Remove and return the top element
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }


  // Return the top element without removing it
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }


  // Check if stack is empty
  isEmpty() {
    return this.items.length === 0;
  }


  // Return the number of elements
  size() {
    return this.items.length;
  }


  // Return all elements as text separated by comma
  toString() {
    return this.items.join(', ');
  }
}


console.log('\nPART A: UNDO HISTORY');


const actionHistory = new Stack();


// Push three required actions
actionHistory.push('Opened Ticket #101');
actionHistory.push('Assigned Ticket #101');
actionHistory.push('Closed Ticket #101');


// Display top action using peek()
console.log('Top Action:', actionHistory.peek());


// Undo the most recent action using pop()
const undoneAction = actionHistory.pop();
console.log('Undo Action:', undoneAction);


// Display remaining actions and stack size
console.log('Remaining Actions:', actionHistory.toString());
console.log('Stack Size:', actionHistory.size());




// ================================================================
// PART B: QUEUE
// ================================================================


class Queue {
  constructor() {
    // Internal array storage for queue elements
    this.items = [];
  }


  // Add an element at the back of the queue
  enqueue(element) {
    this.items.push(element);
  }


  // Remove and return the front element
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }


  // Return the front element without removing it
  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }


  // Check if queue is empty
  isEmpty() {
    return this.items.length === 0;
  }


  // Return the number of elements
  size() {
    return this.items.length;
  }


  // Return all elements as text separated by comma
  toString() {
    return this.items.join(', ');
  }
}


console.log('\nPART B: WAITING REQUESTS');


const waitingRequests = new Queue();


// Enqueue four required requests
waitingRequests.enqueue('Ticket #201 - Password Reset');
waitingRequests.enqueue('Ticket #202 - No Internet');
waitingRequests.enqueue('Ticket #203 - Printer Problem');
waitingRequests.enqueue('Ticket #204 - Software Installation');


// Display the request at the front
console.log('Next Request:', waitingRequests.front());


// Process two requests using dequeue()
console.log('Processed:', waitingRequests.dequeue());
console.log('Processed:', waitingRequests.dequeue());


// Display remaining queue and its size
console.log('Remaining Requests:', waitingRequests.toString());
console.log('Queue Size:', waitingRequests.size());




// ================================================================
// PART C: PRIORITY QUEUE
// ================================================================


class PriorityQueue {
  constructor() {
    // Internal array storage for elements with priority
    this.items = [];
  }


  // Insert item based on priority (lower number = higher priority)
  enqueue(request, priority) {
    const queueElement = { request, priority };
    let added = false;


    // Find correct position to preserve arrival order for equal priorities
    for (let i = 0; i < this.items.length; i++) {
      if (queueElement.priority < this.items[i].priority) {
        this.items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }


    // If higher or equal priority than all, add at the end
    if (!added) {
      this.items.push(queueElement);
    }
  }


  // Remove and return the front (highest priority) item
  dequeue() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items.shift();
  }


  // Return size of priority queue
  size() {
    return this.items.length;
  }


  // Display every request and priority
  print() {
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.items[i].request + ', Priority ' + this.items[i].priority);
    }
  }
}


console.log('\nPART C: URGENT REQUESTS');


const urgentRequests = new PriorityQueue();


// Enqueue requests in given order
urgentRequests.enqueue('Ticket #301 - Install Browser', 3);
urgentRequests.enqueue('Ticket #302 - Server Offline', 1);
urgentRequests.enqueue('Ticket #303 - Faculty PC Failure', 2);
urgentRequests.enqueue('Ticket #304 - Internet Laboratory Down', 1);


console.log('Initial Priority Order:');
urgentRequests.print();


// Process the first request
const processedUrgent = urgentRequests.dequeue();
console.log('\nProcessed Priority Request:', processedUrgent.request + ', Priority ' + processedUrgent.priority);


console.log('\nRemaining Priority Requests:');
urgentRequests.print();




// ================================================================
// PART D: LINKED LIST
// ================================================================


class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }


  // Add node at the end
  append(element) {
    const node = new Node(element);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }


  // Insert node at specific position
  insert(position, element) {
    if (position < 0 || position > this.length) {
      return false;
    }


    const node = new Node(element);
    let current = this.head;
    let previous;
    let index = 0;


    if (position === 0) {
      node.next = current;
      this.head = node;
    } else {
      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }
      node.next = current;
      previous.next = node;
    }


    this.length++;
    return true;
  }


  // Remove node at specific position
  removeAt(position) {
    if (position < 0 || position >= this.length) {
      return null;
    }


    let current = this.head;
    let previous;
    let index = 0;


    if (position === 0) {
      this.head = current.next;
    } else {
      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }
      previous.next = current.next;
    }


    this.length--;
    return current.element;
  }


  // Return index of element or -1 if absent
  indexOf(element) {
    let current = this.head;
    let index = 0;


    while (current !== null) {
      if (current.element === element) {
        return index;
      }
      index++;
      current = current.next;
    }


    return -1;
  }


  // Remove node by value
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }


  // Return true when no nodes exist
  isEmpty() {
    return this.length === 0;
  }


  // Return number of nodes
  size() {
    return this.length;
  }


  // Traverse and return all elements formatted as text
  toString() {
    let current = this.head;
    let result = '';


    while (current !== null) {
      result += current.element;
      if (current.next !== null) {
        result += ' -> ';
      }
      current = current.next;
    }


    return result;
  }
}


console.log('\nPART D: COMPLETED REQUESTS');


const completedRequests = new LinkedList();


// Append initial items
completedRequests.append('Ticket #401 - Account Activated');
completedRequests.append('Ticket #402 - Printer Connected');
completedRequests.append('Ticket #403 - Antivirus Updated');


// Insert at position 0
completedRequests.insert(0, 'Ticket #400 - Computer Diagnosed');


// Insert at the end using insert()
completedRequests.insert(completedRequests.size(), 'Ticket #405 - Browser Updated');


// Display complete list
console.log('Complete List:', completedRequests.toString());


// Find index of Ticket #402
const index402 = completedRequests.indexOf('Ticket #402 - Printer Connected');
console.log('Index of Ticket #402:', index402);


// Remove item at position 1
const removedAt1 = completedRequests.removeAt(1);
console.log('Removed at Position 1:', removedAt1);


// Remove Ticket #403 by value
const removedValue = completedRequests.remove('Ticket #403 - Antivirus Updated');
console.log('Removed by Value:', removedValue);


// Display final list and size
console.log('Final List:', completedRequests.toString());
console.log('Final Size:', completedRequests.size());
