import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";


@Entity("Book")
export class Book extends BaseEntity{

    @PrimaryGeneratedColumn({
        name: "id"
    })
    id!: number;
    
    @Column({
        name: "title"
    })
    title!: string;

    @Column({
        name: "author"
    })
    author!: string;

    @Column({
        name: "description"
    })
    description!: string;

    @Column({
        name: "availability",
        default: true
    })
    availability!: boolean;

    @Column({default:0})
    viewedCount!:number

    @Column()
    category !: number

    @Column({default:1})
    admin !:number
}