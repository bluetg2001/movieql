import {getById, people} from './db';

const resolvers = {
    Query : {
        person: () => person,
        person: (_, { id }) => getById(id) 
    }
};

export default resolvers;