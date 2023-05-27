import { MongoClient } from "mongodb";
import { MongoMemoryServer } from "mongodb-memory-server";

describe("query test using fake database", () => {
  it("find John's document in the users collection", async () => {
    // given
    // 1.임시 DB 생성 코드
    const mongoServer = await MongoMemoryServer.create();
    const connection = await MongoClient.connect(mongoServer.getUri());
    const db = connection.db("testDB");

    // 2.샘플 데이터를 임시 DB 에 넣어주기
    const users = db.collection("users");
    const mockUser = { name: "John" };
    await users.insertOne(mockUser);

    // when
    const foundUser = await users.findOne({ name: "John" });

    // then
    expect(foundUser).toEqual(mockUser);

    // 3.임시 데이터와 DB 삭제
    await connection.close();
    await mongoServer.stop();
  });
});
