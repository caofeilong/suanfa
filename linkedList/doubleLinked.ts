/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
class DoubleLinkedNode {
    value:string

    next: DoubleLinkedNode

    pre:DoubleLinkedNode

    constructor(value:string) {
      this.value = value;
    }
}

class DoubleLinkedList {
    head:DoubleLinkedNode

    tail:DoubleLinkedNode

    length: number=0

    constructor() {
      this.head = null;
      this.tail = this.head;
    }

    //  时间复制度  O(1)
    append(value:string) {
      const newNode = new DoubleLinkedNode(value);
      newNode.pre = this.tail;
      if (!this.head) {
        this.head = newNode;
      } else {
        this.tail.next = newNode;
      }

      this.tail = newNode;
      this.length++;
      return newNode;
    }

    // 时间复制度  O(1)
    prepend(value:string) {
      const newNode = new DoubleLinkedNode(value);
      if (!this.tail) {
        this.tail = newNode;
      } else {
        this.head.pre = newNode;
        newNode.next = this.head;
      }
      this.head = newNode;
      this.length++;
      return newNode;
    }

    // 算法 O(1)
    pop() {
      this.remoteByNode(this.tail);
    }

    // 时间复杂度是 O(1)
    insertNodeAfter(preNode:DoubleLinkedNode, value:string):DoubleLinkedNode {
      if (preNode === this.tail) {
        return this.append(value);
      }
      const { next } = preNode;
      const newNode = new DoubleLinkedNode(value);
      newNode.next = next;
      newNode.pre = preNode;
      next.pre = newNode;
      preNode.next = newNode;
      this.length++;
      return newNode;
    }

    // 时间复杂度是 O(1)
    remoteByNode(rmNode:DoubleLinkedNode) {
      const { next, pre } = rmNode;
      pre.next = next;
      if (next) {
        next.pre = pre;
      }
      this.length--;
    }

    // 时间复杂度是O(N)
    getByIndex(index:number) {
      let tempIndex = 0;
      let tempValue = this.head;
      while (tempIndex < index) {
        // this.head;
        tempValue = tempValue.next;
        tempIndex++;
      }
      return tempValue.value;
    }
}

function main1() {
  const list = new DoubleLinkedList();
  //   const cflNode =
  list.append('cfl');
  list.append('swk');
  list.append('lgl');
  console.info(list);
  list.pop();
  console.info(list);

  // console.info(list.getByIndex(1));
}

// main1();
