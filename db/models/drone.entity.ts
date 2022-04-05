import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export default class Drone{
    @PrimaryColumn()
    id: number;

    @Column()
    customer_image:string;

    @Column()
    customer_name: string

    @Column()
    customer_address: string;

    @Column()
    battery: number

    @Column()
    max_speed:number;

    @Column()
    average_speed:number;

    @Column()
    status:string;

    @Column()
    current_fly:number;
}