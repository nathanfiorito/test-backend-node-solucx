import { IsInt, IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
import { EDroneStatus } from "src/enum/EDroneStatus";

export class UpdateDroneRequest{
    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    customerImage:string;
    
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    customerName: string

    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    customerAddress: string;
    
    @IsInt()
    @IsNotEmpty()
    battery: number
    
    @IsNumber()
    @IsNotEmpty()
    maxSpeed:number;
    
    @IsNumber()
    @IsNotEmpty()
    averageSpeed:number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(15)
    status:EDroneStatus;

    @IsNumber()
    @IsNotEmpty()
    currentFly:number;
}