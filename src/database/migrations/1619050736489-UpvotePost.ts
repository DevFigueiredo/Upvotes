import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class UpvotePost1619050736489 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "UpvotePost",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "user_id",
                        type: "uuid",
                    },
                    {
                        name: "post_id",
                        type: "uuid",
                    },
                    {
                        name: "status",
                        type: "boolean",
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
                    }
                    
                    
            ],
            foreignKeys:[{
                name:"FKUser",
                referencedTableName: "User",
                referencedColumnNames: ["id"],
                columnNames: ["user_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            },
            {
                name:"FkPost",
                referencedTableName: "Post",
                referencedColumnNames: ["id"],
                columnNames: ["post_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            }
        ]
            
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("UpvotePost");

    }

}
