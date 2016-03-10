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
use Flarum\Event\PrepareUnserializedSettings;

class LoadUserSettings
{
    /**
     * Listen for the setting we need.
     *
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(PrepareUnserializedSettings::class, [$this, 'flarum-ext-summaries.excerpt_length']);
    }

    /**
     * Send the setting on to the frontend
     *
     * @param PrepareUnserializedSettings $event
     */
    // public function load(PrepareUnserializedSettings $event)
    // {
    //     $events->settings['flarum-ext-summaries.excerpt_length']
    // }
}
