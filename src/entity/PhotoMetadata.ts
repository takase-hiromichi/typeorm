import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Photo } from "./Photo";

@Entity()
export class PhotoMetadata {
  @PrimaryGeneratedColumn()
  id: number;
  @Column("int")
  height: number;
  @Column("int")
  width: number;
  @Column()
  oriientation: string;
  @Column()
  compressed: boolean;
  @Column()
  comment: string;
  @OneToOne(() => Photo)
  @JoinColumn()
  photo: Photo;
}
