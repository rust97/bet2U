import { createEvent, createStore } from 'effector'

export const setCategory = createEvent()
export const $category = createStore('sport').on(
  setCategory,
  (state, value) => value
)

export const setLandingsLang = createEvent()
export const $landingsLang = createStore('EN').on(
  setLandingsLang,
  (state, value) => value
)
