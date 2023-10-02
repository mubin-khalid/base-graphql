import { buildSchema } from "graphql";

const schema = buildSchema(`

    type Product {
        id: ID,
        name: String,
        description: String,
        price: Float,
        soldOut: SoldOut,
        stores: [Store]!,
    }
    enum SoldOut {
        SOLD_OUT,
        ON_SALE,
    }
    type Store {
        store: String,
    }

    type Query {
        getProduct(id: ID): Product,
        getAllProducts: [Product]
    }
    input IdInput {
        id: ID,
    }
    input StoreInput {
        store: String,
    }

    input ProductInput {
        id: ID,
        name: String,
        description: String,
        price: Float,
        soldOut: SoldOut,
        stores: [StoreInput]!,
    }

    type Mutation {
        createProduct(input: ProductInput): Product
        updateProduct(input: ProductInput): Product
        deleteProduct(input: IdInput): Product
    }
`)

export default schema;