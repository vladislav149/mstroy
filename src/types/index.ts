export interface Item {
  id: number | string
  parent: number | 'root'
  type?: string | null
}

export type id = number | string

export type hashMapId = {
  [id: id]: Item
}

export type hashMapParent = {
  [id: id]: Item[]
}

export abstract class Store {
  abstract getAll(): Item[]
  abstract getItem(id: id): Item
  abstract getChildren(id: id): Item[]
  abstract getAllChildren(id: id): Item[]
  abstract getAllParents(id: id): Item[]
}
