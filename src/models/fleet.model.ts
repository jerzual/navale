import { Vector } from "./vector.model";

/** a fleet is an array of ships, placed or not. */
export interface Fleet {
  ships: Ship[];
}

/**
 * Each type has a size.
 *
 * c'est un chip type ;)
 */
export const enum ShipType {
  Aircraftcarrier = 5,
  Battleship = 4,
  Cruiser = 3,
  Destroyer = 2,
  Submarine = 1,
}

/** main unit of the game. */
export interface Ship {
  /** origin position of the ship */
  position?: Vector;
  /** should skip to true once positioned */
  static: boolean;
  id: string;
}

/** returns a fleet ready to placed */
export function fleetFactory() {
  return [];
}
