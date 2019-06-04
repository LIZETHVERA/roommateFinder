// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [
    {
      routeName: "Ahmed",
      name: "Ahmed",
      photo:"",
      scores:[
          5,
          1,
          4,
          4,
          5,
          1,
          2,
          5,
          4,
          1
        ]
    },
    {
      routeName: "LissaBer",
      name: "Lissa Ber",
      photo:"",
      scores:[
          4,
          1,
          1,
          4,
          5,
          1,
          3,
          5,
          4,
          3
        ]
    }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = tableArray;