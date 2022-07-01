import { Vector } from "./vector.model";

export interface Voxel {
    key: string;
    type: "water" | "air" | "earth" | "fire" | "solid";
    static: boolean;
    pressure: number;
    visquosity: number;
    velocity: Vector;
}
