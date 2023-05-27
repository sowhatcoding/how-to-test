import { MongoClient, ObjectId } from "mongodb";
import { MongoMemoryServer } from "mongodb-memory-server";
import {
  IFruit,
  getFruitByName,
  getFruitCategoryCountByQuantity,
} from "../../fruit";

describe("query test duplicate examples", () => {
  it("find apples document in the fruits collection", async () => {
    // given
    // 1.임시 DB 생성 코드
    const mongoServer = await MongoMemoryServer.create();
    const connection = await MongoClient.connect(mongoServer.getUri());
    const db = connection.db("testDB");

    // 2.샘플 데이터를 임시 DB 에 넣어주기
    const fruits = db.collection<IFruit>("fruits");

    await fruits.insertMany([
      { _id: new ObjectId(), name: "bananas", qty: 7 },
      { _id: new ObjectId(), name: "apples", qty: 5 },
      { _id: new ObjectId(), name: "oranges", qty: 3 },
      { _id: new ObjectId(), name: "avocados", qty: 2 },
    ]);

    // when
    const selectedFruit = await getFruitByName(fruits, "apples");

    // then
    expect(selectedFruit?.name).toBe("apples");

    // 3.임시 데이터와 DB 삭제
    await connection.close();
    await mongoServer.stop();
  });

  it("count fruits document has more than 4 quantity", async () => {
    // given
    // 1.임시 DB 생성 코드
    const mongoServer = await MongoMemoryServer.create();
    const connection = await MongoClient.connect(mongoServer.getUri());
    const db = connection.db("testDB");

    // 2.샘플 데이터를 임시 DB 에 넣어주기
    const fruits = db.collection<IFruit>("fruits");

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

    // 3.임시 데이터와 DB 삭제
    await connection.close();
    await mongoServer.stop();
  });
});
