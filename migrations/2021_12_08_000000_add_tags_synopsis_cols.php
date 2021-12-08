<?php

use Flarum\Database\Migration;

return Migration::addColumns(
    'tags',
    [
        'excerpt_length' => ['integer', 'nullable' => true, 'unsigned' => true],
        'rich_excerpts' => ['boolean', 'nullable' => true]
    ]
);
