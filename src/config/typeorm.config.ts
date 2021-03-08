import { TypeOrmModuleOptions } from "@nestjs/typeorm";



export const typeOrmConfig: TypeOrmModuleOptions = {
    type:'postgres',
    host:'ec2-52-203-27-62.compute-1.amazonaws.com',
    port: 5432,
    username: 'tcijhwkgebdfce',
    password: '01a78e40f2d18353a52647ffdbfc4df5833fc6352e407609f5cac42e64927ee8',
    database: `d557c074a39837`,
    autoLoadEntities: true,
    synchronize: false,
}
console.log(typeOrmConfig)