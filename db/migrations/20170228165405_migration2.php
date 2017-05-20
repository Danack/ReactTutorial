<?php

use Phinx\Migration\AbstractMigration;

class Migration2 extends AbstractMigration
{
    public function change()
    {
        $table = $this->table('examples');
        $table->addColumn('example', 'string')
            ->addColumn('display_name', 'string')
            ->addColumn('created_at', 'datetime')
            ->addColumn('updated_at', 'datetime')
            ->create();
    }
}
