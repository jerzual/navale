import { nanoid } from "nanoid";
import { Vector } from "./vector.model";

export interface Unit {
    id: string;
    position?: Vector;
}

export function initialUnitState(position: Vector) {
    return {
        id: nanoid(),
        position,
    };
}
