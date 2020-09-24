export async function main() {
  const { MongoClient } = require("mongodb");

  const uri =
    "mongodb+srv://yyyy7777:yyyy7777@cluster1.kxtxq.mongodb.net/<dbname>?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  var database;

  try {
    await client.connect();

    database = await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
  return database;
}

async function listDatabases(client) {
  var result = await client
    .db("food")
    .collection("junkfood")
    .findOne({ name: "sprite" });

  if (result) {
    console.log(result);
    return result;
  } else {
    console.log("no db found");
    return null;
  }

  //   databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

// main();

// export function myFoo(a, b) {
//   return a + b;
// }
