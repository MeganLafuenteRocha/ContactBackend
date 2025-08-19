import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Contact } from './contact.entity';
import { People } from 'src/people/entities';

@Entity('social_networks')
export class SocialNetwork {
  @ApiProperty({
    example: 'cd533345-f1f3-48c9-a62e-7dc2da50c8f8',
    description: 'Social Network ID',
    uniqueItems: true,
  })
  
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => People, (people) => people.socialNetworks, {
    onDelete: 'CASCADE',
  })
  people: People;

  @ApiProperty({
    example: 'Facebook',
    description: 'Social network name',
  })
  @Column('text')
  name: string;

  @ApiProperty({
    example: 'https://facebook.com',
    description: 'Base URL of the social network',
  })
  @Column('text')
  baseUrl: string;

  @ApiProperty({
    example: 'fab fa-facebook',
    description: 'Icon class for the social network',
  })
  @Column('text', { nullable: true })
  iconClass: string;

  @ApiProperty({
    example: '#1877F2',
    description: 'Brand color of the social network',
  })
  @Column('text', { nullable: true })
  brandColor: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

}
