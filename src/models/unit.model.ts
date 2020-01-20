import { Vector3 } from "babylonjs";
import { v4 } from "uuid";

export interface Unit {
    id: string;
    position?: Vector3;
}

export function initialUnitState(position: Vector3) {
    return {
        id: v4(),
        position,
    };
}
