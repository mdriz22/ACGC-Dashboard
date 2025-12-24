import { defineStore } from 'pinia';

export const useFilterStore = defineStore('filter', {
  state: () => ({
    year: 2025,
    month: "January",
    site: 'PS10'
  }),

  actions: {
    setFilters({ year, month, site }) {
      this.year = year;
      this.month = month;
      this.site = site;
    }
  },

  getters: {
    applyFilters: (state) => (datasets) => {
      const match = datasets.find(
        item =>
          item.meta.year === state.year &&
          item.meta.month === state.month &&
          item.meta.site === state.site
      );

      return match ? match.records : [];
    }
  }
});
