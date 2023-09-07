import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity( {name:'languages'})
export class Languages extends BaseEntity{

    @PrimaryGeneratedColumn()
    languageId !: number

    @Column()
    languageName !: string
    
}