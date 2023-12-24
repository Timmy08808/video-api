import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

export const _dirname = () => dirname(fileURLToPath(import.meta.url))

export const _resolve = (p1, p2) => resolve(p1, p2)