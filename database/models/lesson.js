import { Model, DataTypes } from "sequelize";
import connection from "../connection";

const initLesson = (sequelize, Types) => {
	class Lesson extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Lesson.init(
		{
			id: {
				type: Types.UUID,
				defaultValue: Types.UUIDV4,
				primaryKey: true,
			},
			group_name: DataTypes.STRING,
			title: DataTypes.STRING,
			type: DataTypes.STRING,
			thumb: DataTypes.STRING,
			path: DataTypes.STRING,
			video_length: DataTypes.FLOAT,
			is_preview: DataTypes.BOOLEAN,
			short_id: DataTypes.INTEGER,
			assets_zip: DataTypes.STRING,
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
			modelName: "Lesson",
			tableName: "lessons",
			createdAt: "created_at",
			updatedAt: "updated_at",
		}
	);
	return Lesson;
};

export default initLesson(connection, DataTypes);
