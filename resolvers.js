const sessions = require('./data/sessions.json');
module.exports = {
  Query: {
    sessions: (parent, args, { dataSources }, info) => {
      return sessions;
    },
    sessionById: (parent, { id }, { dataSources }, info) => {
      return dataSources.sessionAPI.getSessionById(id);
    },
  },
};