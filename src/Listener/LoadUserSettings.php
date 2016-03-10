<?php
/* This is part of the jordanjay/flarum-ext-summaries project.
 *
 * Code (c)2016 Jordan Schnaidt
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace JordanJay29\Summaries\Listener;

use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Event\PrepareApiAttributes;

class LoadUserSettings
{
    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }
    /**
     * Listen for the setting we need.
     *
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(PrepareApiAttributes::class, [$this, 'load']);
    }

    /**
     * Send the setting on to the frontend
     *
     * @param PrepareUnserializedSettings $event
     */
    public function load(PrepareApiAttributes $event)
    {
        $event->attributes['flarum-ext-summaries.excerpt_length'] = $this->settings->get('flarum-ext-summaries.excerpt_length');
    }
}
