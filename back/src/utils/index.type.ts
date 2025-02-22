import type { Brand } from 'ts-brand'

export type Limit = Brand<number, 'Limit'>
export type Percentage = Brand<number, 'Percentage'>
export type Amount = Brand<number, 'Amount'>

export type PartialEntity<T extends { id: string }> = Partial<T> & Pick<T, 'id'>
