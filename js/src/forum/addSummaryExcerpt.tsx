import { extend } from 'flarum/common/extend';
import app from 'flarum/forum/app';
import DiscussionListState from 'flarum/forum/states/DiscussionListState';
import DiscussionListItem from 'flarum/forum/components/DiscussionListItem';
import { truncate } from 'flarum/common/utils/string';
import ItemList from 'flarum/common/utils/ItemList';

export default function addSummaryExcerpt() {
  extend(DiscussionListState.prototype, 'requestParams', function (params: any) {
    if (app.forum.attribute('synopsis.excerpt_type') === 'first') params.include.push('firstPost');
    else params.include.push('lastPost');
  });

  extend(DiscussionListItem.prototype, 'infoItems', function (items: ItemList) {
    const discussion = this.attrs.discussion;

    if (app.session.user && !app.session.user.preferences().showSynopsisExcerpts) {
      return;
    }

    const excerptPost = app.forum.attribute('synopsis.excerpt_type') === 'first' ? discussion.firstPost() : discussion.lastPost();
    const excerptLength = app.forum.attribute('synopsis.excerpt_length');
    const richExcerpt = app.forum.attribute('synopsis.rich_excerpts');
    const onMobile = app.session.user ? app.session.user.preferences().showSynopsisExcerptsOnMobile : false;

    if (excerptPost) {
      const excerpt = (
        <div inert>
          {richExcerpt ? m.trust(truncate(excerptPost.contentHtml(), excerptLength)) : truncate(excerptPost.contentPlain(), excerptLength)}
        </div>
      );

      items.add(onMobile ? 'excerptM' : 'excerpt', excerpt, -100);
    }
  });
}
