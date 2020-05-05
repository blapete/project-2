module.exports = function (sequelize, DataTypes) {
    let Spot = sequelize.define("Spot", {
        spot_name: DataTypes.STRING,
    });

    return Spot;
};