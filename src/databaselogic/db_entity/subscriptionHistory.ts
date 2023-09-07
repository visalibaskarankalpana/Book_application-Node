import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, PrimaryColumn, UpdateDateColumn} from "typeorm";


@Entity( " subscriptionHistory ")
export class subscriptionHistory extends BaseEntity{

    @PrimaryColumn({
        name: "id",
        generated: "increment",
    })
    id!: number;

   @Column()
   userId!: number

   @Column()
   bookId!: number

   @Column({default:true})
   subStatus!: boolean

    @CreateDateColumn({
        type: "date"
    })
    subscribedDate!: Date;

    @Column({
        type:"date"
    })
    validTill!: Date;


}