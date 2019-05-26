import * as Loaders from './loaders';


export default {
  Query: {
    launches: (root, args, context, info) => Loaders.getLaunches(root, args, context, info),
    launch: (root, args, context, info) => Loaders.getLaunch(root, args, context, info),
    rockets: (root, args, context, info) => Loaders.getRockets(root, args, context, info),
    rocket: (root, args, context, info) => Loaders.getRocket(root, args, context, info),
  },
};
