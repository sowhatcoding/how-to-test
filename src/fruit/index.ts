import { MongoClient, ObjectId, Document, Collection } from "mongodb";

/**
 * Data Access Layer (=Repository)
 * - 데이터 CRUD 를 위한 쿼리들을 만들어둠
 * - 비즈니스 로직에서 공용으로 사용할수 있음
 */

export interface IFruit extends Document {
  _id: ObjectId;
  name: string;
  qty: number;
}

async function getFruitByName(fruits: Collection<IFruit>, name: string) {
  return fruits.findOne({ name: name });
}

async function getFruitCategoryCountByQuantity(
  fruits: Collection<IFruit>,
  quantity: number
) {
  return fruits.countDocuments({ qty: { $gt: quantity } });
}

async function removeFruitByQuantity(
  fruits: Collection<IFruit>,
  quantity: number
) {
  return fruits.deleteMany({ qty: { $gt: quantity } });
}

/**
 * 실제 Database 에서 조회하는 샘플 코드
 * @returns
 */
async function originalDBSampleFunc() {
  const realDatabaseUrl = "someRealIp"; // 실제 환경에 있는 Database 접속 주소
  const connection = await MongoClient.connect(realDatabaseUrl);
  const db = connection.db("realDB");

  const fruits = db.collection<IFruit>("fruits");

  return getFruitByName(fruits, "apples");
}

export {
  getFruitByName,
  getFruitCategoryCountByQuantity,
  removeFruitByQuantity,
};
