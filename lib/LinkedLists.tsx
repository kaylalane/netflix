import { TitleType } from "./data";
class Node<T> {
  public value: T;
  public next: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export default class circularLinkedList<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  public length: number = 0;

  //Other methods go here
  //Get value at specific index
  getvalueAt = (index: number) => {
    if (index >= 0 && index <= length) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  };

  //Add new node
  append(value: T) {
    //Create new node
    const node = new Node(value);
    let current;

    //If head is empty
    //Then make new node head
    if (this.head === null) {
      this.head = node;
    } else {
      //Else add the new node as the next node
      //And mark the next of new node to the head
      current = this.getvalueAt(length - 1);
      if (current?.next) current.next = node;
    }

    node.next = this.head;
    length++;
  }

  //Print item of the string
  toString() {
    let current = this.head,
      string = "";

    //Keep track of the head
    const temp = this.head?.value || null;

    while (current) {
      //If head is the next value then break
      if (temp === current.next?.value) {
        string += current.value + (current.next ? "\n" : "");
        break;
      }

      string += current.value + (current.next ? "\n" : "");
      current = current.next;
    }

    return string;
  }
}
