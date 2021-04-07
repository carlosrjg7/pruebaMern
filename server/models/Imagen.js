module.exports = (sequelize, type) => {
    return sequelize.define('imagen', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        url: type.STRING,
        name: type.STRING
    },{
        timestamps: true
    })
}