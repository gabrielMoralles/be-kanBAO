import { TypeOrmModuleOptions } from "@nestjs/typeorm";


export const typeOrmConfig: TypeOrmModuleOptions = {
    type:'postgres',
    host:'localhost',
    port: 5432,
    username: 'postgres',
    password: 'gabriel121324',
    database: `task-management`,
    autoLoadEntities: true,
    synchronize: true
}