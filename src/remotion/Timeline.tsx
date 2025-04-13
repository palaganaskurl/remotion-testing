import { useState, useMemo } from "react";
import { Item, Track } from "./types";
import { Player } from "@remotion/player";
import { Main } from "./Main";

const Editor: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([
    {
      name: "Track 1",
      items: [
        {
          type: "text",
          text: "TESTx",
          durationInFrames: 10 * 30,
          from: 0 * 30,
        } as Item,
        // { type: "text", text: "TESTx" } as Item,
        {
          type: "solid",
          color: "red",
          durationInFrames: 10 * 30,
          from: 4 * 30,
        } as Item,
      ],
    },
    { name: "Track 2", items: [] },
  ]);

  console.log("Tracks", tracks);

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
        controls
      />
      {/* <Timeline tracks={tracks} setTracks={setTracks} /> */}
    </>
  );
};

export default Editor;
