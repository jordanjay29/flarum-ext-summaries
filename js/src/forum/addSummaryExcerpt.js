import { extend } from 'flarum/extend';
import app from 'flarum/app';
import DiscussionList from 'flarum/components/DiscussionList';
import DiscussionListItem from 'flarum/components/DiscussionListItem';
import { truncate } from 'flarum/utils/string';

export default function addSummaryExcerpt() {
  extend(DiscussionList.prototype, 'requestParams', function(params) {
    params.include.push('firstPost');
    params.include.push('lastPost');
  });

  extend(DiscussionListItem.prototype, 'infoItems', function(items) {
    const discussion = this.props.discussion;
    const excerptLength = app.forum.attribute('flarum-ext-summaries.excerpt_length') || 200;
    const firstOrLastPost = app.forum.attribute('flarum-ext-summaries.first_or_last_post') || 'first';

    if (firstOrLastPost === 'first') {
      const firstPost = discussion.firstPost();

      if (firstPost) {
        const excerpt = <span>{truncate(firstPost.contentPlain(), excerptLength)}</span>;

        items.add('excerpt', excerpt, -100);
      }
    } else if (firstOrLastPost === 'last') {
        const lastPost = discussion.lastPost();

        if (lastPost) {
            const excerpt = <span>{truncate(lastPost.contentPlain(), excerptLength)}</span>;

            items.add('excerpt', excerpt, -100);
        }
    }
  });
}
