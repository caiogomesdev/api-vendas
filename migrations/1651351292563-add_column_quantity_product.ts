import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addColumnQuantityProduct1651351292563
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'product',
      new TableColumn({
        name: 'quantity',
        type: 'int',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('product', 'quantity');
  }
}
