# Test

## Query

### Find all

```gql
query {
  coffees {
    id,
    name,
    brand,
    flavors {
        id
        name
    }
    createdAt
  }
}
```

### Find one

```gql
query($coffeeId: ID!) {
  coffee(id: $coffeeId) {
    id,
    name,
    brand,
    flavors {
        id
        name
    }
  }
}
```

Variables:

```gql
{
    "coffeeId": 1
}

```

## Mutation

### Create

```gql
mutation {
  createCoffee(createCoffeeInput: {
    name: "Shipwreck Roast 3",
    brand: "Buddybrew",
    flavors: ["chocolate", "vanilla"]
  }) {
    id
    name
    brand
    flavors {
        id
        name
    }
  }
}
```

### Update

```gql
mutation {
  updateCoffee(id: 3, updateCoffeeInput: {
    name: "Updated"
  }) {
    name
  }
}

```

### Remove

```gql
mutation {
  removeCoffee(id: 2) {
    name
  }
}
```


## Graphql Interfaces

```gql
{
  drinks {
    ... on Tea {
        name
    }
    ... on Coffee {
        brand
    }
  }
}
```

## Unions and enums

```gql
{
  __type(name: "CoffeeType") {
    enumValues {
      name
    }
  }
}
```

## Subscriptions

```gql
subscription {
  coffeeAdded {
    id
    name
    brand
  }
}
```