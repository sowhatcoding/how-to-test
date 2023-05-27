interface IChocoPie {
  dough: IDough;
  inside: IngredientType;
  outside: IngredientType;
}

interface IDough {
  ingredient: IngredientType;
  texture: TextureType;
}

enum IngredientType {
  WHEAT = "wheat",
  OAT = "oat",
  RICE = "rice",
  MARSHMALLOW = "marshmallow",
  STRAWBERRY = "strawberry",
  CHOCO = "choco",
}

enum TextureType {
  HARD = "hard",
  SOFT = "soft",
}

function sellChocoPie(isKorean: boolean, isEvent: boolean) {
  if (isKorean) {
    if (isEvent) {
      return riceChocoPie;
    }
    return originalChocoPie;
  }

  return strawberryChocoPie;
}

// 초코파이 얻어오는 함수
function getChocoPie(): IChocoPie {
  const texture = TextureType.HARD;

  // 반죽하기
  const dough = getChocoPieDough(texture);

  // 속 재료 : 마시멜로우
  const inside = getInsideStuff();

  // 코팅 재료 : 초코
  const outside = getOutsideStuff();

  return {
    dough,
    inside,
    outside,
  };
}

function getChocoPieDough(texture: TextureType): IDough {
  // 반죽 재료 가져오기
  const ingredient = getWheat();

  return {
    ingredient, // 반죽 재료
    texture, // 반죽 강도
  };
}

function getChocoPieDoughByIngredient(
  texture: TextureType,
  getIngredient: () => IngredientType
): IDough {
  // 반죽 재료 가져오기
  const ingredient = getIngredient();

  return {
    ingredient, // 반죽 재료
    texture, // 반죽 강도
  };
}

function getChocoPieDoughBySomething() {
  return getChocoPieDoughByIngredient(TextureType.HARD, getWheat);
}

function getWheat(): IngredientType {
  return IngredientType.WHEAT;
}

function getRice(): IngredientType {
  return IngredientType.RICE;
}

function getInsideStuff() {
  return IngredientType.MARSHMALLOW;
}

function getOutsideStuff() {
  return IngredientType.CHOCO;
}

const originalChocoPie: IChocoPie = {
  dough: {
    ingredient: IngredientType.WHEAT,
    texture: TextureType.HARD,
  },
  inside: IngredientType.MARSHMALLOW,
  outside: IngredientType.CHOCO,
};

const riceChocoPie: IChocoPie = {
  dough: {
    ingredient: IngredientType.RICE,
    texture: TextureType.SOFT,
  },
  inside: IngredientType.MARSHMALLOW,
  outside: IngredientType.CHOCO,
};

const strawberryChocoPie: IChocoPie = {
  dough: {
    ingredient: IngredientType.WHEAT,
    texture: TextureType.HARD,
  },
  inside: IngredientType.STRAWBERRY,
  outside: IngredientType.CHOCO,
};

export {
  sellChocoPie,
  getChocoPie,
  getChocoPieDough,
  getInsideStuff,
  getOutsideStuff,
  getWheat,
  getChocoPieDoughByIngredient,
  TextureType,
  IngredientType,
  originalChocoPie,
  riceChocoPie,
  strawberryChocoPie,
};
