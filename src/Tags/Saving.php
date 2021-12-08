<?php

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
