<?php

/* This is part of the jordanjay/flarum-ext-summaries project.
 *
 * Modified code (c)2016 Jordan Schnaidt
 *
 * Original code (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace JordanJay29\Summaries;

use Illuminate\Contracts\Events\Dispatcher;

return function (Dispatcher $events) {
    $events->subscribe(Listener\AddApiAttributes::class);
    $events->subscribe(Listener\AddClientAssets::class);
    $events->subscribe(Listener\LoadUserSettings::class);
};
