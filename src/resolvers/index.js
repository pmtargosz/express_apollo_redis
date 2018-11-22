const {promisify} = require('util');

module.exports = {
    Query: {
        get: (parent, { key }, { client }) => {
            try {
                const getAsync = promisify(client.get).bind(client);
                return getAsync(key);
            } catch (err) {
                console.log(err)
                return null;
            }
        }
    },
    Mutation: {
        set: async (parent, { key, value }, { client }) => {
            try {
                await client.set(key, value);
                return true;
            } catch (err) {
                console.log(err);
                return false;
            }
        }
    }
}