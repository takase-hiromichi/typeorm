import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PhotoMetadata } from "./PhotoMetadata";

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100 })
  name: string;
  @Column("text")
  description: string;
  @Column()
  filename: string;
  @Column("double")
  views: number;
  @Column()
  isPublished: boolean;
  @OneToOne(() => PhotoMetadata, (photoMetadta) => photoMetadta.photo, {
    cascade: true,
  })
  metadata: PhotoMetadata;
}
