import TreeStore from '../index.js'
import items from '../data.js'
describe('TreeStore', () => {
  const ts = new TreeStore(items)

  describe('getAll()', () => {
    it('should return all items', () => {
      expect(ts.getAll()).toEqual(items)
    })
  })

  describe('getItem(id)', () => {
    it('should return the item with the specified id', () => {
      const expectedItem = {id: 3, parent: 1, type: 'test'}
      expect(ts.getItem(3)).toEqual(expectedItem)
    })
  })

  describe('getChildren(id)', () => {
    it('should return the children of the item with the specified id', () => {
      const expectedChildren = [
        {id: 2, parent: 1, type: 'test'},
        {id: 3, parent: 1, type: 'test'}
      ]
      expect(ts.getChildren(1)).toEqual(expectedChildren)
    })

    it('should return an empty array if the item has no children', () => {
      expect(ts.getChildren(7)).toEqual([])
    })
  })

  describe('getAllChildren(id)', () => {
    it('should return all children of the item with the specified id', () => {
      const expectedChildren = [
        {id: 2, parent: 1, type: 'test'},
        {id: 4, parent: 2, type: 'test'},
        {id: 7, parent: 4, type: null},
        {id: 8, parent: 4, type: null},
        {id: 5, parent: 2, type: 'test'},
        {id: 6, parent: 2, type: 'test'},
        {id: 3, parent: 1, type: 'test'}
      ]
      expect(ts.getAllChildren(1)).toEqual(expectedChildren)
    })

    it('should return an empty array if the item has no children', () => {
      expect(ts.getAllChildren(7)).toEqual([])
    })
  })

  describe('getAllParents(id)', () => {
    it('should return all parents of the item with the specified id', () => {
      const expectedParents = [
        {id: 4, parent: 2, type: 'test'},
        {id: 2, parent: 1, type: 'test'},
        {id: 1, parent: 'root'}
      ]
      expect(ts.getAllParents(7)).toEqual(expectedParents)
    })

    it('should return an empty array if the item has no parents', () => {
      expect(ts.getAllParents(1)).toEqual([])
    })
  })
})
