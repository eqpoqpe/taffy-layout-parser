export default {
  div: [
    "@plusOne"
  ],
  event: {
    plusOne: [
      "!click",
      [
        (e) => {
          console.log(e);
        }, "@event"
      ]
    ]
  }
};