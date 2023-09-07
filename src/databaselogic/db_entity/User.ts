import {Entity,Column,PrimaryGeneratedColumn, BaseEntity} from "typeorm";
    

export enum RoleEnumType {
    USER = 'user',
    ADMIN = 'admin',
  }

@Entity("User")
export class User extends BaseEntity{


    @PrimaryGeneratedColumn({
        name: "id"
    })
    id!: number;

    @Column({
        name: "firstName",
    })
    firstName!: string;

    @Column({
        name: "userName"
    })
    userName!: string;

    @Column({
        name: "email"
    })
    email!: string;

    @Column({
        name:"password"
    })
    password!: string;


    @Column({
        default : false,
        name: "activeStatus"
    })
    activeStatus!: boolean;

    // @Column(
    //     {default : true}
    // )
    // status !: boolean;
    @Column("integer",
    {array:true,default:[]
   })
   bookspurchased !:number[]

    @Column({
        type: 'enum',
        enum: RoleEnumType,
        default: RoleEnumType.USER,
      })
      role!: RoleEnumType.USER;

}