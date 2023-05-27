import { MongoClient, ObjectId, Db } from "mongodb";
import { MongoMemoryServer } from "mongodb-memory-server";
import {
  IFruit,
  removeFruitByQuantity,
  getFruitCategoryCountByQuantity,
} from "../../fruit";

describe("query test using clear after each", () => {
  let mongoServer: MongoMemoryServer;
  let connection: MongoClient;
  let db: Db;

  beforeAll(async () => {
    // given
    // 1.임시 DB 생성 코드
    mongoServer = await MongoMemoryServer.create();
    connection = await MongoClient.connect(mongoServer.getUri());
    db = connection.db("testDB");
  });

  afterAll(async () => {
    // 3.임시 데이터와 DB 삭제
    await connection.close();
    await mongoServer.stop();
  });

  afterEach(async () => {
    const fruits = db.collection("fruits");
    await fruits.drop();
  });

  it("delete apples document has more than 4 quantity", async () => {
    // given
    const fruits = db.collection<IFruit>("fruits");

    // 2.샘플 데이터를 임시 DB 에 넣어주기
    await fruits.insertMany([
      { _id: new ObjectId(), name: "bananas", qty: 7 },
      { _id: new ObjectId(), name: "apples", qty: 5 },
      { _id: new ObjectId(), name: "oranges", qty: 3 },
      { _id: new ObjectId(), name: "avocados", qty: 2 },
    ]);

    // when
    const { deletedCount } = await removeFruitByQuantity(fruits, 4);

    // then
    expect(deletedCount).toBe(2);
  });

  it("count fruits document has more than 4 quantity", async () => {
    // given
    const fruits = db.collection<IFruit>("fruits");

    // 2.샘플 데이터를 임시 DB 에 넣어주기
    await fruits.insertMany([
      { _id: new ObjectId(), name: "bananas", qty: 7 },
      { _id: new ObjectId(), name: "apples", qty: 5 },
      { _id: new ObjectId(), name: "oranges", qty: 3 },
      { _id: new ObjectId(), name: "avocados", qty: 2 },
    ]);

    // when
    const selectedFruitCount = await getFruitCategoryCountByQuantity(fruits, 4);

    // then
    expect(selectedFruitCount).toBe(2);
  });
});
