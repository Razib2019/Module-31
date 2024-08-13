// Console log the secondary school location of sophia
let data = {
  sophia: {
    id: 33,
    study: [
      {
        primary: [
          { school_name: "ABC Primary School" },
          { location: "Peters burg" },
        ],
      },
      {
        secondary: [
          {
            school_name: "ABC Primary School",
          },
          { location: "St. Lorence" },
        ],
      },
    ],
  },
};

console.log(data.sophia.study[1].secondary[1].location);
