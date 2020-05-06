module.exports = function (sequelize, DataTypes) {
    let Spot = sequelize.define("Spot", {
        spot_name: DataTypes.STRING,
        image: DataTypes.STRING,
        rating: DataTypes.INTEGER,
        alias: DataTypes.STRING,
        address: DataTypes.STRING,
        likes: DataTypes.INTEGER
    });

    return Spot;
};