import { Query, Resolver } from '@nestjs/graphql';
import { Coffee } from 'src/coffees/entities/coffee.entity/coffee.entity';
// import { Drink } from 'src/common/interfaces/drink.interface/drink.interface';
import { DrinksResultUnion } from 'src/common/unions/drinks-result.union';
import { Tea } from 'src/teas/entities/tea.entity/tea.entity';

@Resolver()
export class DrinksResolver {
  @Query(
    () => [
      DrinksResultUnion, //Drink
    ],
    { name: 'drinks' },
  )
  async findAll(): Promise<(typeof DrinksResultUnion)[]> {
    // we're mocking everything just for demonstration purposes
    const coffee = new Coffee();
    coffee.id = 1;
    coffee.name = 'Colombia';
    coffee.brand = 'Black Crow Coffee';

    // we're mocking everything - we also don't have a Tea table
    // [if you'd like!] as a fun exercise follow steps similar to how we did everything for Coffee
    // to create a Tea table/etc
    const tea = new Tea();
    tea.name = 'Lipton';
    return [tea, coffee];
  }
}
