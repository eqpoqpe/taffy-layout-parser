import { naivePresent } from "fifi";

function Page() {
  const { onData, onEvent } = naivePresent();

  onData.create("count", 0)
    .on({state: true});

  onEvent.create("plusOne", "click")
    .effect((event, setter) => {
      event.target.class = "dark";

      setter((prev) => prev += 1);
    }, "@event", onData.setcount)
    .on({once: true});

  return {
    "div": [
      onEvent.plusOne
      [

        // pure data
        onData.count
      ]
    ]
  };
}