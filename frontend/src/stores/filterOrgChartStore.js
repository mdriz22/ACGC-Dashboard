import { defineStore } from 'pinia';

export const useFilterOrgChartStore = defineStore('filterOrgChart', {
  state: () => ({
    site: 'PS10'
  }),

   actions: {
    setFilters({ site }) {
      this.site = site;
    }
  },

//   getters: {
//     applyFilters: (state) => (datasets) => {
//       const match = datasets.find(
//         item =>
         
//           item.meta.site === state.site
//       );

//       return match ? match.records : [];
//     }
//   }


getters: {
  applyFilters: (state) => (datasets = []) => {
    if (!Array.isArray(datasets)) return [];
    
    const match = datasets.find(
      item => item.meta?.site === state.site
    );

    return match ? match.records : [];
  }
}



})