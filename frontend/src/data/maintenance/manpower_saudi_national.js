export default {
  functions: [                      // <-- FIXED
    "Site Management Staff",
    "MEP Technical Staff",
    "Housekeeping & Recreational Service Staff"
  ],

  total: [19, 40, 95],

  nationals: [4, 1, 5],

  percentage: [
    ((4 / 19) * 100).toFixed(1),
    ((1 / 40) * 100).toFixed(1),
    ((5 / 95) * 100).toFixed(1)
  ]
};
