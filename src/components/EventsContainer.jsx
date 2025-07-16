import { create } from "zustand";

export const useCarrier = create(() => ({
    images: {},
    names: {},
    addStrings: (items) => {
        this.names = items;
    },
    addImages: (items) => {
        this.images = items;
    }
}));