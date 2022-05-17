const Post = {
  "div": [
    [
      "&count"
    ]
  ]
};

export default {
  div: [
    ".page",
    "@plusOne",
    [
      "Page",
      [Post, "&count"]
    ]
  ],
  event: {
    plusOne: [
      "!click",
      [
        (e) => {
          console.log(e);
        }, "@event"
      ]
    ],
    Page: [
      "!mounted",
      [
        (value) => {
          console.log(e);
        }, "&count"
      ]
    ]
  },
  data: {
    count: [
      [0]
    ]
  }
};