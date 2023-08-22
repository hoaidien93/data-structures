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
})