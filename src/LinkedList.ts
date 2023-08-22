export interface ILinkedList<T> {
    size: number;
    peek(): T | undefined;
    append(value: T): void;
    prepend(value: T): void;
    delete(value: T): void;
    [Symbol.iterator](): IterableIterator<T>;
}

export interface ILinkedListNode<T> {
    value: T;
    next: ILinkedListNode<T> | undefined;
}

export class LinkedList<T> implements ILinkedList<T> {
    protected _head: ILinkedListNode<T> | undefined = undefined;
    protected _tail: ILinkedListNode<T> | undefined = undefined;
    protected _size: number = 0;
    [Symbol.iterator](): IterableIterator<T> {
        if (!this._head) return [].values();
        function* generator(node: ILinkedListNode<T>): IterableIterator<T> {
            if (node) {
                yield node.value;
                if (node.next) yield* generator(node.next);
            }
        }
        return generator(this._head);
    }

    peek(): T | undefined {
        if (this._head) return this._head.value;
        return undefined;
    }

    private _valueToNode(value: T): ILinkedListNode<T> {
        return {
            value,
            next: undefined
        }
    }
    append(value: T): void {
        const node = this._valueToNode(value);
        if (!this._head) {
            this._head = node;
            this._tail = node;
        } else {
            if (!this._tail) throw new Error("Tail is null");
            this._tail.next = node;
            this._tail = node;
        }
        this._size++;
    }

    prepend(value: T): void {
        const node = this._valueToNode(value);
        if (!this._head) {
            this._head = node;
            this._tail = node;
        } else {
            node.next = this._head;
            this._head = node;
        }
        this._size++;
    }

    get size(): number {
        return this._size;
    }

    delete(value: T): void {
        // Treversing the list
        let current = this._head;
        let previous = null;
        while (current) {
            if (current.value === value) {
                if (previous === null) {
                    this._head = current.next;
                } else {
                    previous.next = current.next;
                }
                this._size--;
            }
            previous = current;
            current = current.next;
        }
    }
}