import { Model, DataTypes } from "sequelize";
import connection from "../connection";

const initLike = (sequelize, Types) => {
	class Like extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Like.init(
		{
			id: {
				type: Types.UUID,
				defaultValue: Types.UUIDV4,
				primaryKey: true,
			},
			likess: DataTypes.STRING,
			userId: {
				type: DataTypes.UUID,
				allowNull: false,
				onDelete: "CASCADE",
				references: {
					model: "users",
					key: "id",
					as: "userId",
				},
			},
			courseId: {
				type: DataTypes.UUID,
				allowNull: false,
				onDelete: "CASCADE",
				references: {
					model: "courses",
					key: "id",
					as: "courseId",
				},
			},
            messageId: {
				type: DataTypes.UUID,
				allowNull: false,
				onDelete: "CASCADE",
				references: {
					model: "messages",
					key: "id",
					as: "messageId",
				},
			},
		},
		{
			sequelize,
			modelName: "Like",
			tableName: "likes",
			createdAt: "created_at",
			updatedAt: "updated_at",
		}
	);
	return Like;
};
export default initLike(connection, DataTypes);