import { create } from "zustand"

type useModalState = {
  name: string
  closeModal: () => void
  openModal: (name: string) => void
  getState: (name: string) => boolean
}

export const useModal = create<useModalState>()((set, get) => ({
  name: "",
  closeModal: () => set({ name: "" }),
  getState: (targetName) => get().name === targetName,
  openModal: (targetName) => set({ name: targetName }),
}))
