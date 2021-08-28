export default (MongoClient, connectionString) => {
  let client;
  if (!client.connect()) {
    client = new MongoClient(connectionString);

    return client.connect();
  }

  return client;
};
