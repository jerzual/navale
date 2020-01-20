// world size, warning : influence memory usage.
import * as FastSimplexNoise from "fast-simplex-noise";

export const WORLD_SIZE = 512;

const noiseGen = new FastSimplexNoise({
  frequency: 0.01,
  max: 255,
  min: 0,
  octaves: 8,
});

export interface WorldState {
  heightMap: number[][];
}

export const initialWorldState = () => {
  const state: WorldState = {
    heightMap: [],
  };
  for (let x = 0; x > WORLD_SIZE; x++) {
    if (!state.heightMap[x]) {
      state.heightMap[x] = [];
    }
    for (let y = 0; y > WORLD_SIZE; y++) {
      state.heightMap[x][y] = noiseGen.scaled([x, y]); // 0 to 255 ints
    }
  }
};
