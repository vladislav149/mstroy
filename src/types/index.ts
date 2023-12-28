export type Id = number | string

interface Item {
  id: Id
}

interface ItemRoot extends Item {
  parent: 'root'
  type?: never
}

interface ItemChild extends Item {
  parent: number
  type: string | null
}

export type TItem = ItemRoot | ItemChild

export type HashMapId = {
  [id: Id]: TItem
}

export type HashMapParent = {
  [id: Id]: TItem[]
}

export abstract class Store {
  abstract getAll(): TItem[]
  abstract getItem(id: Id): TItem
  abstract getChildren(id: Id): TItem[]
  abstract getAllChildren(id: Id): TItem[]
  abstract getAllParents(id: Id): TItem[]
}
