<?php

/* This is part of the ianm/summariesplus project.

 * Additional modifications (c) 2020 Ian Morland
 *
 * Modified code (c)2019 Jordan Schnaidt
 *
 * Original code (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        /**
         * @var SettingsRepositoryInterface
         */
        $settings = app('flarum.settings');

        $settings->set('ianm-summariesplus.excerpt_length', '200');
        $settings->set('ianm-summariesplus.rich-excerpts', false);
        $settings->set('ianm-summariesplus.excerpt-type', 'first');
    },
    'down' => function (Builder $schema) {
        // Do nothing
    },
];
