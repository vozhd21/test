const Sequelize = require("sequelize");
const db = require("../sequelize");
const makeUser = require("../../../model/user");

const User = db.define("user", {
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
  },
  address: Sequelize.STRING,
  hasProof: Sequelize.BOOLEAN,
  hasMoonbird: Sequelize.BOOLEAN,
  userName: Sequelize.STRING,
});

const create = async (args) => {
  const userInstance = makeUser(args);
  try {
    return await User.create({
      address: userInstance.getAddress(),
      hasProof: userInstance.getHasProof(),
      hasMoonbird: userInstance.getHasMoonBird(),
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const findByAddress = async (address) => {
  try {
    return await User.findOne({
      where: {
        address,
      },
    });
  } catch (error) {
    throw error;
  }
};

const update = async (id, args) => {
  try {
    User.update(args, {
      where: {
        id,
      },
    });
  } catch (error) {
    throw error;
  }
};

module.exports = Object.freeze({
  create,
  update,
  findByAddress,
});
