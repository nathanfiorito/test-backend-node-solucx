import Drone from "db/models/drone.entity";
import { ResponseBase } from "../responseBase";

export class DroneListResponse extends ResponseBase{
    drones: Drone[];

    constructor(_message: string, _drones: Drone[]){
        super(_message)
        this.drones = _drones;
    }
}