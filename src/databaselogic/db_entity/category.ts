import { Entity, BaseEntity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity({name:'category'})

export class Category extends BaseEntity{


    @PrimaryGeneratedColumn()
    categoryId !: number;

    @Column(
        {length:20}
    )    
    categoryName !: string

    
}