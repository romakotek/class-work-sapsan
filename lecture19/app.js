const fetchedData = fetch(
  "https://my-json-server.typicode.com/romakotek/dummy-data/db",
  {
    method: "GET",
  }
)
  .then((response) => console.log(response.json()))
  .catch((error) => console.error(error))
  .finally(console.log("ended"));

console.log(await fetchedData());
