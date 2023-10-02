import { Widgets } from './dbConnectors';

const resolvers = {
    getProduct: ({ id }) => {
        return Widgets.findById({ _id: id }).then(res => res).catch(e => { throw e });
    },
    createProduct: ({ input }) => {
        const newWidget = new Widgets({
            name: input.name,
            description: input.description,
            price: input.price,
            soldOut: input.soldOut,
            stores: input.stores
        })
        newWidget.id = newWidget._id;
        return newWidget.save().then(res => res).catch(e => { throw e })
    },

    updateProduct: ({ input }) => {
        return Widgets.findOneAndUpdate({ _id: input.id }, input, { new: true }).then(res => res).catch(e => { throw e })
    },

    deleteProduct: ({ input }) => {
        return Widgets.findOneAndDelete({ _id: input.id }).then(res => res).catch(e => {throw e});
    },

    getAllProducts: () => {
        return Widgets.find({}).then(res => res).catch(e => {throw e});
    }
}

export default resolvers;