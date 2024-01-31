import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Coffee } from '../coffee.entity/coffee.entity';

@Entity()
@ObjectType({ description: 'Flavor model' })
export class Flavor {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Coffee, (coffee) => coffee.flavors /* inverse side */)
  coffees: Coffee[];
}
