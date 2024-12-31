import { Model, DataTypes } from "sequelize";
import connection from "../connection";

const initMessage = (sequelize, Types) => {
	class Message extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Message.init(
		{
			id: {
				type: Types.UUID,
				defaultValue: Types.UUIDV4,
				primaryKey: true,
			},
			message: DataTypes.STRING,
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
		},
		{
			sequelize,
			modelName: "Message",
			tableName: "messages",
			createdAt: "created_at",
			updatedAt: "updated_at",
		}
	);
	return Message;
};
export default initMessage(connection, DataTypes);
