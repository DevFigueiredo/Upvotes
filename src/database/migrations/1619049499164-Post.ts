import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Post1619049499164 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Post",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "post_text",
                        type: "text"
                    },
                    {
                        name: "user_id",
                        type: "uuid",
                        default: true
                    },
                    {
                        name: "status",
                        type: "boolean"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    
            ],
            foreignKeys:[{
                name:"FKUser",
                referencedTableName: "User",
                referencedColumnNames: ["id"],
                columnNames: ["user_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            }]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.dropTable("Post");


    }
}
