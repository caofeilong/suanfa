/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
export class SingleLinkedNode<T> {
    value:T

    next: SingleLinkedNode<T>

    constructor(value:T) {
      this.value = value;
    }

    list():Array<T> {
      const rValue:Array<T> = [this.value];
      let tempValue = this as SingleLinkedNode<T>;
      while (tempValue.next != null) {
        tempValue = tempValue.next;
        rValue.push(tempValue.value);
      }
      return rValue;
    }
}

export class SingleLinkedList<T> {
    head:SingleLinkedNode<T>

    tail:SingleLinkedNode<T>

    length: number=0

    constructor() {
      this.head = null;
      this.tail = this.head;
    }

    //  时间复制度  O(1)
    append(value:T) {
      const newNode = new SingleLinkedNode(value);
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
    prepend(value:T) {
      const newNode = new SingleLinkedNode(value);
      if (!this.tail) {
        this.tail = newNode;
      } else {
        newNode.next = this.head;
      }
      this.head = newNode;
      this.length++;
      return newNode;
    }

    // 算法 O(N)
    pop() {
      let temNode = this.head;
      while (temNode.next !== this.tail) {
        temNode = temNode.next;
      }
      temNode.next = null;
      this.tail = temNode;
      this.length--;
    }

    // 时间复杂度是 O(1)
    insertNodeAfter(preNode:SingleLinkedNode<T>, value:T):SingleLinkedNode<T> {
      if (preNode === this.tail) {
        return this.append(value);
      }
      const newNode = new SingleLinkedNode(value);
      newNode.next = preNode.next;
      preNode.next = newNode;
      this.length++;
      return newNode;
    }

    // 时间复杂度是 O(N)
    remoteByNode(rmNode:SingleLinkedNode<T>) {
      if (rmNode === this.tail) {
        this.pop();
        return;
      }
      const { next } = rmNode;
      let temNode = this.head;
      while (temNode.next !== rmNode) {
        temNode = temNode.next;
      }
      temNode.next = next;
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

// function main() {
//   const list = new SingleLinkedList<string>();
//   //   const cflNode =
//   list.append('cfl');
//   list.append('swk');
//   list.append('lgl');
//   console.info(list);
//   // list.pop();
//   // console.info(list);

//   // console.info(list.getByIndex(1));
// }

// main();
