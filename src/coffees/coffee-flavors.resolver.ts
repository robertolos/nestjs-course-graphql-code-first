import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coffee } from './entities/coffee.entity/coffee.entity';
import { Flavor } from './entities/flavor.entity/flavor.entity';
import { FlavorsByCoffeeLoader } from './data-loader/flavors-by-coffee.loader/flavors-by-coffee.loader';

@Resolver(() => Coffee)
export class CoffeeFlavorsResolver {
  constructor(
    // @InjectRepository(Flavor)
    // private readonly flavorsRepository: Repository<Flavor>,
    private readonly flavorsByCoffeeLoader: FlavorsByCoffeeLoader,
  ) {}

  // @ResolveField('flavors', () => [Flavor])
  // async getFlavorsOfCoffee(@Parent() coffee: Coffee) {
  //   // Using the injected repository,
  //   // let’s retrieve ALL flavors that belong to a “parent coffee”.
  //   return this.flavorsRepository
  //     .createQueryBuilder('flavor')
  //     .innerJoin('flavor.coffees', 'coffees', 'coffees.id = :coffeeId', {
  //       coffeeId: coffee.id,
  //     })
  //     .getMany();
  // }

  @ResolveField('flavors', () => [Flavor])
  async getFlavorsOfCoffee(@Parent() coffee: Coffee) {
    //soves N+1 problem
    return this.flavorsByCoffeeLoader.load(coffee.id);
  }
}
