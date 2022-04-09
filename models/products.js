const db = require("../services/db");

async function get(id = 0) {
  let query = "select * from products";
  if (id !== 0) {
    query += ` where id = ${parseInt(id)}`;
  }
  const data = await db(query);
  return data;
}

async function create(data) {
  const query = `insert into products (name, price, description, category_id, status, stock, images) values ("${data.name}", ${data.price}, "${data.description}", ${data.category_id}, ${data.status}, ${data.stock}, "")`;
  const insert = await db(query);
  return insert;
}

async function update(data, id) {
  const query = `update products set name="${data.name}", price=${
    data.price
  }, description="${data.description}", category_id=${
    data.category_id
  }, status=${data.status}, stock=${data.stock} where id=${parseInt(id)}`;

  const update = await db(query);
  return update;
}

async function remove(id){
    const query = `delete from products where id = ${parseInt(id)}`;
    const deleteData = await db(query);
    return deleteData;
}

module.exports = {
  get,
  create,
  update,
  remove
};
