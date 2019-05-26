import { mergeSchemas } from 'graphql-tools';
import RocketsSchema from './Rockets';

const schema = mergeSchemas({
  schemas: [
    RocketsSchema,
  ],

});


export default schema;
