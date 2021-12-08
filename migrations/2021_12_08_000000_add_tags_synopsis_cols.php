<?php

/*
 * This file is part of the ianm/synopsis.
 *
 * (c) 2020 - 2021 Ian Morland
 * (c) 2019 Jordan Schnaidt
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use Flarum\Database\Migration;

return Migration::addColumns(
    'tags',
    [
        'excerpt_length' => ['integer', 'nullable' => true, 'unsigned' => true],
        'rich_excerpts'  => ['boolean', 'nullable' => true],
    ]
);
