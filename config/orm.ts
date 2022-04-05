import {TypeOrmModuleOptions} from '@nestjs/typeorm';
import path from 'path';

const options: TypeOrmModuleOptions = {
    type: 'sqlite',
    database: 'data/dev.db',
    logging: true,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    migrations: [__dirname + '../db/migrations/*{.ts,.js}'],
    synchronize: true,
}

module.exports = options;