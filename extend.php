<?php

/* This is part of the jordanjay/flarum-ext-summaries project.
 *
 * Modified code (c)2019 Jordan Schnaidt
 *
 * Original code (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace JordanJay29\Summaries;

use Flarum\Api\Controller\ListDiscussionsController;
use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/resources/less/forum/extension.less'),
        
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js'),

    new Extend\Locales(__DIR__.'/resources/locale'),

    (new Extend\Settings())
        ->serializeToForum('flarum-ext-summaries.excerpt_length', 'flarum-ext-summaries.excerpt_length'),

    (new Extend\ApiController(ListDiscussionsController::class))
        ->addInclude('firstPost'),
];
