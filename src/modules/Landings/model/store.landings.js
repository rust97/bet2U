import { createEvent, createStore } from 'effector'

export const setCategory = createEvent()
export const $category = createStore('sport').on(
  setCategory,
  (state, value) => value
)
