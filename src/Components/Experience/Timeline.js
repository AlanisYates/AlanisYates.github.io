import React from "react";
import {
  Timeline,
  Events,
  TextEvent,
  themes,
  createTheme,
} from "@merc/react-timeline";

const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: "White",
  },
  date: {
    backgroundColor: "black",
  },
  marker: {
    borderColor: "gray",
  },
  timelineTrack: {
    backgroundColor: "white",
  },
});

const text = (
    <p>this is a test of the language</p>
)



export default function () {
  return (
    <Timeline theme={customTheme}>
      <Events>
        <TextEvent date="10/01/19" text="Etech Events" />
        <TextEvent date="10/01/19" text="Etech Events" />
        <TextEvent date="10/01/19" text="Etech Events" />
        <TextEvent date="10/01/19" text="Etech Events" />
      </Events>
    </Timeline>
  );
}
