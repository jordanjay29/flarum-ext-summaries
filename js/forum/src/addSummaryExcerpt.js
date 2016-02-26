import { extend } from 'flarum/extend';
import DiscussionList from 'flarum/components/DiscussionList';
import DiscussionListItem from 'flarum/components/DiscussionListItem';
import { truncate } from 'flarum/utils/string';

export default function addSummaryExcerpt() {
  extend(DiscussionList.prototype, 'requestParams', function(params) {
    params.include.push('startPost');
  });

  extend(DiscussionListItem.prototype, 'infoItems', function(items) {
    const discussion = this.props.discussion;

    const startPost = discussion.startPost();

    if (startPost) {
      const excerpt = <span>{truncate(startPost.contentPlain(), 200)}</span>;

      items.add('excerpt', excerpt, -100);
    }
  });
}
