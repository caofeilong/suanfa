/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
// 删除有序重复链表
import { SingleLinkedNode, SingleLinkedList } from './singleLinked';

// 迭代
function deleteDuplicates(node:SingleLinkedNode<number>):SingleLinkedNode<number> {
  let tempNode = node;
  while (tempNode && tempNode.next) {
    if (tempNode.next.value === tempNode.value) {
      tempNode.next = tempNode.next.next;
    } else {
      tempNode = tempNode.next;
    }
  }
  return node;
}

function deleteDuplicates1(node:SingleLinkedNode<number>):SingleLinkedNode<number> {
  if (!node || !node.next) {
    return node;
  }
  if (node.next.value === node.value) {
    node.next = node.next.next;
    deleteDuplicates1(node);
  } else {
    deleteDuplicates1(node.next);
  }

  return node;
}

function main1() {
  const linkList = new SingleLinkedList<number>();
  linkList.append(1);
  linkList.append(2);
  linkList.append(2);
  linkList.append(2);
  linkList.append(3);
  linkList.append(4);

  console.info(deleteDuplicates(linkList.head).list());
  console.info(deleteDuplicates1(linkList.head).list());
}

main1();
