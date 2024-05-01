import { create } from "zustand"
import { persist } from "zustand/middleware"

type BasicPathState = {
  path: string
  setPath: (newPath: string) => void
}

export const useBasicPath = create<BasicPathState>()(
  persist(
    (set) => ({
      path: "",
      setPath: (newPath) => set({ path: newPath }),
    }),
    {
      name: "path",
    }
  )
)
