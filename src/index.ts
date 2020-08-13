import { Request, Response, NextFunction } from 'express'
import { asyncLocalStorage } from './storage'

export const expressALS = <T extends object>(store?: T) => (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  asyncLocalStorage.run(store ?? {}, () => {
    next()
  })
}

export const getStore = <T>(): T => {
  return asyncLocalStorage.getStore() as T
}
