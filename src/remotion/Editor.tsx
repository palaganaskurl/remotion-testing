import React, { useMemo, useState } from "react";
import { Player } from "@remotion/player";
import type { Item } from "./types";
import { ItemComp, Main } from "./Main";

type Track = {
  name: string;
  items: Item[];
};

export const Editor = () => {
  const [tracks, setTracks] = useState<Track[]>([
    {
      name: "Track 1",
      items: [
        { type: "text", text: "TESTx" } as Item,
        { type: "solid", color: "red", durationInFrames: 5, from: 0 } as Item,
      ],
    },
    { name: "Track 2", items: [] },
  ]);

  const inputProps = useMemo(() => {
    return {
      tracks,
    };
  }, [tracks]);

  return (
    <>
      <Player
        component={Main}
        fps={30}
        inputProps={inputProps}
        durationInFrames={600}
        compositionWidth={1280}
        compositionHeight={720}
        acknowledgeRemotionLicense={true}
      />
    </>
  );
};
