import { createStore, createEvent } from 'effector'

export const changeLang = createEvent()

export const $language = createStore('EN').on(changeLang, (state, lang) => lang)
