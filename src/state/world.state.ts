// world size, warning : influence memory usage.
import SimplexNoise from 'simplex-noise';

export const WORLD_SIZE = 512;
const seed = 'abcd';
const noiseGen = new SimplexNoise(seed);

export interface WorldState {
  heightMap: number[][];
}

export const initialWorldState = () => {
  const state: WorldState = {
    heightMap: [],
  };
  for (let x = 0; x < WORLD_SIZE; x++) {
    if (!state.heightMap[x]) {
      state.heightMap[x] = [];
    }
    for (let y = 0; y < WORLD_SIZE; y++) {
      state.heightMap[x][y] = noiseGen.noise2D(x, y); // 0 to 255 ints
    }
  }
};
