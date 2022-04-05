import { IsDate, IsIn, IsInt, IsNotEmpty, IsNumber, IsString, Max, MaxLength, MinLength } from "class-validator";
import { EDroneStatus } from "src/enum/EDroneStatus";

export class CreateDroneRequest{
    id: number

    @IsString()
    @MaxLength(255)
    customer_image:string;
    
    @IsString()
    @MaxLength(100)
    customer_name: string

    @IsString()
    @MaxLength(255)
    customer_address: string;
    
    @IsInt()
    @IsNotEmpty()
    @Max(100)
    battery: number
    
    @IsNumber()
    @IsNotEmpty()
    max_speed:number;
    
    @IsNumber()
    @IsNotEmpty()
    average_speed:number;

    @IsString()
    @IsNotEmpty()
    @IsIn([EDroneStatus.CHARGING, EDroneStatus.DELAYED, EDroneStatus.FAIL,EDroneStatus.FLYING,EDroneStatus.OFFLINE, EDroneStatus.SUCCESS])
    status:EDroneStatus;

    @IsNumber()
    @IsNotEmpty()
    @Max(100)
    current_fly:number;
}