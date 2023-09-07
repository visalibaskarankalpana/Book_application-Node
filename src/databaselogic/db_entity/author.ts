import { Entity, BaseEntity, PrimaryGeneratedColumn, Column} from "typeorm"


@Entity({name:'author'})

export class Author extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    authorId !: number;

    @Column()
    authorName !: string
    
}