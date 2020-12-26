/* This is part of the ianm/summariesplus project.

 * Additional modifications (c)2020 Ian Morland
 *
 * Modified code (c)2019 Jordan Schnaidt
 *
 * Original code (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { extend } from 'flarum/extend';
import app from 'flarum/app';
import DiscussionList from 'flarum/components/DiscussionList';
import DiscussionListItem from 'flarum/components/DiscussionListItem';
import { truncate } from 'flarum/utils/string';

export default function addSummaryExcerpt() {
    extend(DiscussionList.prototype, 'requestParams', function (params) {
        params.include.push(['firstPost', 'lastPost']);
    });

    extend(DiscussionListItem.prototype, 'infoItems', function (items) {
        const discussion = this.attrs.discussion;

        const excerptPost = app.forum.attribute('summariesplus.excerpt_type') === 'first' ? discussion.firstPost() : discussion.lastPost();
        const excerptLength = app.forum.attribute('summariesplus.excerpt_length');
        const richExcerpt = app.forum.attribute('summariesplus.rich_excerpts');

        if (excerptPost) {
            const excerpt = <span>{m.trust(truncate(richExcerpt ? excerptPost.contentHtml() : excerptPost.contentPlain(), excerptLength))}</span>;

            items.add('excerpt', excerpt, -100);
        }
    });
}
