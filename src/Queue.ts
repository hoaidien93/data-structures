import { ILinkedList, LinkedList } from "./LinkedList";

export interface IQueue<T> {
    enqueue(value: T): void;
    dequeue(): T | undefined;
    isEmpty(): boolean;
}

export class Queue<T> implements IQueue<T> {
    private _linkedList: ILinkedList<T>;
    constructor() {
        this._linkedList = new LinkedList<T>();
    }

    enqueue(value: T): void {
        this._linkedList.append(value);
    }

    dequeue(): T | undefined {
        const value = this._linkedList.peek();
        if (value) this._linkedList.delete(value);
        return value;
    }

    isEmpty(): boolean {
        return this._linkedList.size === 0;
    }
}
