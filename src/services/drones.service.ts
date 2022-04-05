import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Drone from 'db/models/drone.entity';
import { CreateDroneRequest } from 'src/request/drones/createDroneRequest';
import { UpdateDroneRequest } from 'src/request/drones/updateDroneRequest';
import { Repository } from 'typeorm';

@Injectable()
export class DronesService {
    constructor(@InjectRepository(Drone) private droneRepository: Repository<Drone>){}

    async list(): Promise<Drone[]>{
        return await this.droneRepository.find();
    }

    async sort(sort: string, order: string): Promise<Drone[]>{
        const query = await this.droneRepository.createQueryBuilder('drone')

        if(order.toUpperCase() === 'ASC')
            query.orderBy(`drone.${sort}`, 'ASC');

        else if(order.toUpperCase() === 'DESC'){
            query.orderBy(`drone.${sort}`, 'DESC');
        }
        return await query.getMany();
    }

    async pagination(page: number, limit: number): Promise<Drone[]>{
        const query = await this.droneRepository.createQueryBuilder('drone')
        query.offset((page - 1) * limit).limit(limit);
        return await query.getMany();
    }
    
    async detail(id: number): Promise<Drone>{
        return await this.droneRepository.findOne({where: {id}});
    }

    async create(createDroneRequest: CreateDroneRequest): Promise<Drone>{
        return await this.droneRepository.save(createDroneRequest);
    }

    async update(id:number , updateDroneRequest: UpdateDroneRequest): Promise<Drone>{ 
        await this.droneRepository.update({id}, updateDroneRequest);

        return this.detail(id);
    }

    async delete(id: number){
        return await this.droneRepository.delete(id);
    }
}
