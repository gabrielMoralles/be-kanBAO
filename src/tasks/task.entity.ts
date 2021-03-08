import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Task extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: string;

    @Column()
    public name: string;
    
    @Column()
    public date: string;
    
    @Column()
    public status: string
}

