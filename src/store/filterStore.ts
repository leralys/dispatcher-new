import create from 'zustand';
import { devtools } from 'zustand/middleware';

import { IFilterObject, DateFilterType } from '../utils/types/types';
import { endpoints } from '../utils/consts/filters';

interface IFilterState {
  filterObject: IFilterObject;
  setEndpoint: (endpoint: string) => void;
  setFilter: (value: string, id: string) => void;
  setDatesFilter: (dates: DateFilterType) => void;
}

export const useFilterStore = create<IFilterState>()(
  devtools((set, get) => ({
    filterObject: {
      country: '',
      endpoint: endpoints[0].value,
      language: '',
      sortBy: '',
      category: '',
      sources: '',
      q: '',
      from: '',
      to: '',
    },
    setEndpoint: (endpoint: string) =>
      set((state) => ({
        filterObject: {
          ...state.filterObject,
          country: '',
          language: '',
          sortBy: '',
          category: '',
          sources: '',
          from: '',
          to: '',
          endpoint,
        },
      })),
    setFilter: (value: string, id: string) =>
      set((state) => ({
        filterObject: { ...state.filterObject, [id]: value },
      })),
    setDatesFilter: (dates: DateFilterType) =>
      set((state) => ({
        filterObject: { ...state.filterObject, to: dates.to, from: dates.from },
      })),
  }))
);
