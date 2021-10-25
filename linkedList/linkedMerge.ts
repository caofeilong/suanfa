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
//    1   3  3       6
// 1           4 5 6

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

  console.info(mergeLinked(l1.head, l2.head).list());
}

main();
