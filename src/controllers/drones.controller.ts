import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { DroneResponse } from 'src/reponse/drones/droneResponse';
import { DroneListResponse } from 'src/reponse/drones/droneListReponse';
import { ResponseBase } from 'src/reponse/responseBase';
import { CreateDroneRequest } from 'src/request/drones/createDroneRequest';
import { UpdateDroneRequest } from 'src/request/drones/updateDroneRequest';
import { DronesService } from '../services/drones.service';

@Controller('drones')
export class DronesController {
    constructor(private readonly dronesService: DronesService){}

    @Get()
    async List(@Query('_page') page: number, @Query('_limit') limit: number, @Query('_sort') sort: string,@Query('_order') order: "ASC" | "DESC",): Promise<DroneListResponse> {
        if(page !== undefined && limit !== undefined){
            return new DroneListResponse('Dados retornados com sucesso!', await this.dronesService.pagination(page, limit));
        }
        else if(sort !== undefined && order !== undefined){
            return new DroneListResponse('Dados retornados com sucesso!', await this.dronesService.sort(sort, order));
        } 
        return new DroneListResponse('Dados retornados com sucesso!', await this.dronesService.list());
    }

    @Get(':id')
    async Detail(@Param('id', ParseIntPipe) id:number): Promise<DroneResponse>{
        let drone = await this.dronesService.detail(id);

        if(!drone){
            throw new NotFoundException(`Não foi possível encontrar um drone com ID ${id}`);
        }

        return new DroneResponse('Dados retornados com sucesso!', drone);;
    }

    @Post(':id')
    async Create(@Param('id', ParseIntPipe) id:number, @Body(ValidationPipe) createDroneRequest: CreateDroneRequest): Promise<DroneResponse>{
        createDroneRequest.id = id;
        return new DroneResponse('Registro inserido com sucesso!', await this.dronesService.create(createDroneRequest));
    }

    @Put(':id')
    async Update(@Param('id', ParseIntPipe) id:number, @Body(ValidationPipe) updateDroneRequest: UpdateDroneRequest): Promise<DroneResponse>{
        let drone = await this.dronesService.detail(id);

        if(!drone){
            throw new NotFoundException(`Não foi possível atualizar o drone com ID ${id}, pois não foi encontrado.`);
        }
        
        return new DroneResponse(`Drone com ID ${id} atualizado com sucesso!`, await this.dronesService.update(id, updateDroneRequest));
    }

    @Delete(':id')
    async Delete(@Param('id', ParseIntPipe) id:number):  Promise<ResponseBase>{
        let drone = await this.dronesService.detail(id);

        if(!drone){
            throw new NotFoundException(`Não foi possível deletar um drone com ID ${id}, pois não foi encontrado.`);
        }
        await this.dronesService.delete(id);
        return new ResponseBase(`Drone com o ID ${id} foi deletado com sucesso!`)
    }
}
