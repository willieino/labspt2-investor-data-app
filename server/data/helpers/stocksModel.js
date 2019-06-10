const db = require("../dbConfig.js");

module.exports = {
    get: () => {
        return db("stocks");
    },

   getByUid: uid => {
        let query = db('stocks');
        if (uid) {
            query.where('uid', uid).first();
            return query;
        }
        return db('stocks')
    },

    update: (id, changes) => {
        return db('stocks')
            .where('id', id)
            .update(changes)
            .then(count => (count > 0 ? this.get(id) : null));
    },

    remove: id => {
        return db("stocks")
          .where("id", id)
          .del();
      },
    
      insert: stock => {
        return db("stocks").insert(stock);
    }
};
