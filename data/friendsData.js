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
      photo:"https://content-static.upwork.com/uploads/2014/10/01073435/profilephoto5.jpg",
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
      photo:"https://imgix.bustle.com/uploads/image/2018/5/9/fa2d3d8d-9b6c-4df4-af95-f4fa760e3c5c-2t4a9501.JPG?w=970&h=546&fit=crop&crop=faces&auto=format&q=70",
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