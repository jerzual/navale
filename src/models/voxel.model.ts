import { Vector3 } from "babylonjs";

export interface Voxel {
    key: string;
    type: "water" | "air" | "earth" | "fire" | "solid";
    static: boolean;
    pressure: number;
    visquosity: number;
    velocity: Vector3;
}
