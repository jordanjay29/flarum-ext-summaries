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

namespace IanM\Synopsis\Tags;

use Flarum\Tags\Event\Saving as Event;
use Illuminate\Support\Arr;

class Saving
{
    public function handle(Event $event)
    {
        $attributes = Arr::get($event->data, 'attributes', []);

        $excerptLength = Arr::get($attributes, 'excerptLength');
        $event->tag->excerpt_length = $excerptLength;

        $richExcerpts = Arr::get($attributes, 'richExcerpts');
        $event->tag->rich_excerpts = $richExcerpts === null ? $richExcerpts : (bool) $richExcerpts;
    }
}
