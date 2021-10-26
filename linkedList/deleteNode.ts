// 根据value 删除节点

import { SingleLinkedList } from './singleLinked';

function deleteNode() {
  const sl = new SingleLinkedList();
  sl.append(1);
  sl.append(1);
  sl.append(2);
  sl.append(2);
  sl.append(1);
  sl.append(2);
  sl.deleteNodeByValue(2);
  console.info(sl);
  console.info(sl.head.list());
}

deleteNode();
