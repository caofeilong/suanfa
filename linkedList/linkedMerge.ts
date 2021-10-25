/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { SingleLinkedNode, SingleLinkedList } from './singleLinked';
// 有序链表merge

// 方法1 递归

function mergeLinked(l1:SingleLinkedNode<number>, l2:SingleLinkedNode<number>):SingleLinkedNode<number> {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }
  if (l1.value < l2.value) {
    l1.next = mergeLinked(l1.next, l2);
    return l1;
  } if (l2.value <= l1.value) {
    l2.next = mergeLinked(l1, l2.next);
    return l2;
  }

  return null;
}

// 方法二 迭代
function mergeLinked1(l1:SingleLinkedNode<number>, l2:SingleLinkedNode<number>):SingleLinkedNode<number> {
  let tempL1 = l1;
  let tempL2 = l2;
  const newL = new SingleLinkedList<number>();
  while (tempL1 && tempL2) {
    if (tempL1.value <= tempL2.value) {
      newL.appendNode(tempL1);
      tempL1 = tempL1.next;
    } else if (tempL2.value <= tempL1.value) {
      newL.appendNode(tempL2);
      tempL2 = tempL2.next;
    }
  }
  if (!tempL1) {
    newL.appendNode(tempL2);
  }
  if (!tempL2) {
    newL.appendNode(tempL1);
  }
  return newL.head;
}

function main() {
  const l1 = new SingleLinkedList<number>();
  l1.append(1);
  l1.append(3);
  l1.append(3);
  l1.append(6);
  const l2 = new SingleLinkedList<number>();
  l2.append(1);
  l2.append(4);
  l2.append(5);
  l2.append(6);

  console.info(mergeLinked1(l1.head, l2.head).list());
//   console.info(mergeLinked(l1.head, l2.head).list());
}

main();
