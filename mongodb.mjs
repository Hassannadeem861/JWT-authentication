import { MongoClient } from "mongodb";

//Mongodb Uri = ya mera database ki connect Url hain
// ya mera database taak gana ki rasta hain
const uri =
  "mongodb+srv://Hassan:Hassan741883@cluster0.jjpseix.mongodb.net/?retryWrites=true&w=majority";
export const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Successfully connected to Atlas");
  } catch (err) {
    console.log(err);
    await client.close();
    process.exit(1);
  }
}
run().catch(console.dir);

process.on("SIGINT", async function () {
  console.log("app is terminating");
  await client.close();
  process.exit(0);
});
