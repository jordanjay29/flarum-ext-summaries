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

namespace JordanJay29\Summaries\Listener;

use Flarum\Api\Controller\ListDiscussionsController;
use Flarum\Event\ConfigureApiController;
use Illuminate\Contracts\Events\Dispatcher;

class AddApiAttributes
{
    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(ConfigureApiController::class, [$this, 'includeStartPost']);
    }
    
    /**
     * @param ConfigureApiController $event
     */
    public function includeStartPost(ConfigureApiController $event)
    {
        if ($event->isController(ListDiscussionsController::class)) {
            $event->addInclude('startPost');
        }
    }
}
