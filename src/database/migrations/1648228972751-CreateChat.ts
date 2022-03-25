import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateChat1648228972751 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'chat',
                columns:[
                    {
                        name:'id',
                        type:'uuid',
                        isPrimary:true
                    },
                    {
                        name:'request',
                        type:'uuid'
                    }
                ],
                foreignKeys:[
                    {
                        name:"FKRequestChat",
                        referencedTableName:"request",
                        referencedColumnNames:["id"],
                        columnNames:["request"],
                        onDelete:"SET NULL",
                        onUpdate:"SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('chat')
    }

}
