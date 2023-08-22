import { ILinkedList, LinkedList } from "./LinkedList";

describe('LinkedList', () => {
    let linkedList: ILinkedList<number>;
    beforeEach(() => {
        linkedList = new LinkedList<number>();
    });
    test('can append', () => {
        expect(linkedList.append).toBeDefined();
        expect(linkedList.size).toBe(0);
        linkedList.append(1);
        expect(linkedList.size).toBe(1);
        linkedList.append(2);
        expect(linkedList.size).toBe(2);
    })
    test('can prepend', () => {
        expect(linkedList.prepend).toBeDefined();
        expect(linkedList.size).toBe(0);
        linkedList.prepend(1);
        expect(linkedList.size).toBe(1);
        linkedList.prepend(2);
        expect(linkedList.size).toBe(2);
    });

    test('can peek', () => {
        expect(linkedList.peek).toBeDefined();
        expect(linkedList.peek()).toBeUndefined();
        linkedList.append(1);
        expect(linkedList.peek()).toBe(1);
        linkedList.append(2);
        expect(linkedList.peek()).toBe(1);
    });

    test('can delete', () => {
        expect(linkedList.delete).toBeDefined();
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.delete(2);
        expect(linkedList.size).toBe(2);
        expect(linkedList.peek()).toBe(1);
        linkedList.delete(1);
        expect(linkedList.size).toBe(1);
        expect(linkedList.peek()).toBe(3);
        linkedList.delete(3);
        expect(linkedList.size).toBe(0);
        expect(linkedList.peek()).toBeUndefined();
    })


    test('can iterate', () => {
        expect(linkedList[Symbol.iterator]).toBeDefined();
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        const iterator = linkedList[Symbol.iterator]();
        expect(iterator.next().value).toBe(1);
        expect(iterator.next().value).toBe(2);
        expect(iterator.next().value).toBe(3);
        expect(iterator.next().value).toBeUndefined();

        expect([...linkedList]).toEqual([1, 2, 3]);
    });

    test('Complex test', () => {
        linkedList.append(1);
        linkedList.prepend(2);
        linkedList.append(3);
        linkedList.prepend(4);
        linkedList.delete(2);
        expect([...linkedList]).toEqual([4, 1, 3]);
    })
})