import {TItem, Id, HashMapId, HashMapParent, Store} from './types/index.js'
import items from './data.js'

class TreeStore extends Store {
  private readonly items: TItem[]
  private hashMapId: HashMapId
  private hashMapParent: HashMapParent

  constructor(items: TItem[]) {
    super()
    this.items = items
    this.hashMapId = {}
    this.hashMapParent = {}
    this.getHashMaps()
  }

  private getHashMaps(): void {
    this.items.forEach((item: TItem) => {
      this.hashMapId[item.id] = item
      this.hashMapParent[item.parent]
        ? this.hashMapParent[item.parent].push(item)
        : (this.hashMapParent[item.parent] = [item])
    })
  }

  public getAll(): TItem[] {
    return this.items
  }

  public getItem(id: Id): TItem {
    return this.hashMapId[id]
  }

  public getChildren(id: Id): TItem[] {
    return this.hashMapParent[id] || []
  }

  public getAllChildren(id: Id): TItem[] {
    return this.getChildren(id).reduce<TItem[]>((acc, cur) => {
      acc.push(cur)
      acc.push(...this.getAllChildren(cur.id))
      return acc
    }, [])
  }

  public getAllParents(id: Id): TItem[] {
    const parentItem = this.getItem(this.getItem(id)?.parent)

    if (!parentItem) return []

    return [parentItem, ...this.getAllParents(this.getItem(id).parent)]
  }
}

const ts = new TreeStore(items)

console.log('getAll', ts.getAll())
console.log('getItem(7)', ts.getItem(7))
console.log('getChildren(5)', ts.getChildren(5))
console.log('getChildren(2)', ts.getChildren(2))
console.log('getAllChildren(2)', ts.getAllChildren(1))
console.log('getAllParents(0)', ts.getAllParents(0))
console.log('getAllParents(1)', ts.getAllParents(1))
console.log('getAllParents(3)', ts.getAllParents(3))
console.log('getAllParents(6)', ts.getAllParents(6))
console.log('getAllParents(7)', ts.getAllParents(7))

export default TreeStore
