import { IQueue, Queue } from "./Queue";

export interface ITree<T> {
    root: ITreeNode<T>;
    height: number;
    size: number;
    traverseBreadthFirst(): T[];
    traverseDepthFirst(): T[];
}

interface ITreeNode<T> {
    value: T;
    children: ITreeNode<T>[];
}

export class TreeNode<T> implements ITreeNode<T> {
    value: T;
    children: ITreeNode<T>[];

    constructor(value: T) {
        this.value = value;
        this.children = [];
    }

    traverseBreadthFirst() {
        const values: T[] = [];
        const queue: IQueue<ITreeNode<T>> = new Queue<ITreeNode<T>>();
        while (!queue.isEmpty()) {
            const node = queue.dequeue();
            values.push(node.value);
            node.children.forEach(child => queue.enqueue(child));
        }
        return values;
    }
}