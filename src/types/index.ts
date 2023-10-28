export type Id = number | string

export interface Item {
  id: Id
  parent: number | 'root'
  type?: string | null
}

export type HashMapId = {
  [id: Id]: Item
}

export type HashMapParent = {
  [id: Id]: Item[]
}

export abstract class Store {
  abstract getAll(): Item[]
  abstract getItem(id: Id): Item
  abstract getChildren(id: Id): Item[]
  abstract getAllChildren(id: Id): Item[]
  abstract getAllParents(id: Id): Item[]
}
