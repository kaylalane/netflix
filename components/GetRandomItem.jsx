import { useState } from "react";

export default function getRandomTitles(initialList, length) {
  if (initialList == null) {
    return initialList;
  }
  const titles = [];
  const titlesAsLinkedList = new circularLinkedList();

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  while (titles.length < length) {
    const temp = initialList[getRandomInt(initialList.length)];
    if (!titles.includes(temp)) {
      titles.push(temp);
      titlesAsLinkedList.append(temp);
    }
  }

  return titles;
}

function circularLinkedList() {
  //Node
  class Node {
    constructor(element) {
      this.element = element;
      this.next = null;
    }
  }

  let length = 0;
  let head = null;

  //Other methods go here
  //Get element at specific index
  this.getElementAt = function (index) {
    if (index >= 0 && index <= length) {
      let node = head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  };

  //Add new node
  this.append = function (element) {
    //Create new node
    const node = new Node(element);
    let current;

    //If head is empty
    //Then make new node head
    if (head === null) {
      head = node;
    } else {
      //Else add the new node as the next node
      //And mark the next of new node to the head
      current = this.getElementAt(length - 1);
      current.next = node;
    }

    node.next = head;
    length++;
  };

  //Print item of the string
  this.toString = function () {
    let current = head,
      string = "";

    //Keep track of the head
    const temp = head.element;

    while (current) {
      //If head is the next element then break
      if (temp === current.next.element) {
        string += current.element + (current.next ? "\n" : "");
        break;
      }

      string += current.element + (current.next ? "\n" : "");
      current = current.next;
    }

    return string;
  };
}
