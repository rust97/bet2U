import { createEvent, createStore } from 'effector'

export const setLang = createEvent()
export const $subLang = createStore('EN').on(setLang, (state, value) => value)
