System.register('jordanjay29/summaries/addSummaryExcerpt', ['flarum/extend', 'flarum/app', 'flarum/components/DiscussionList', 'flarum/components/DiscussionListItem', 'flarum/utils/string'], function (_export) {
  'use strict';

  var extend, app, DiscussionList, DiscussionListItem, truncate;

  _export('default', addSummaryExcerpt);

  function addSummaryExcerpt() {
    extend(DiscussionList.prototype, 'requestParams', function (params) {
      params.include.push('startPost');
    });

    extend(DiscussionListItem.prototype, 'infoItems', function (items) {
      var discussion = this.props.discussion;

      var startPost = discussion.startPost();
      var excerptLength = app.forum.attribute('flarum-ext-summaries.excerpt_length') || 200;

      if (startPost) {
        var excerpt = m(
          'span',
          null,
          truncate(startPost.contentPlain(), excerptLength)
        );

        items.add('excerpt', excerpt, -100);
      }
    });
  }

  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp['default'];
    }, function (_flarumComponentsDiscussionList) {
      DiscussionList = _flarumComponentsDiscussionList['default'];
    }, function (_flarumComponentsDiscussionListItem) {
      DiscussionListItem = _flarumComponentsDiscussionListItem['default'];
    }, function (_flarumUtilsString) {
      truncate = _flarumUtilsString.truncate;
    }],
    execute: function () {}
  };
});;
System.register('jordanjay29/summaries/main', ['flarum/extend', 'flarum/app', 'jordanjay29/summaries/addSummaryExcerpt'], function (_export) {
  'use strict';

  var extend, notificationType, app, addSummaryExcerpt;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
      notificationType = _flarumExtend.notificationType;
    }, function (_flarumApp) {
      app = _flarumApp['default'];
    }, function (_jordanjay29SummariesAddSummaryExcerpt) {
      addSummaryExcerpt = _jordanjay29SummariesAddSummaryExcerpt['default'];
    }],
    execute: function () {

      app.initializers.add('jordanjay29-summaries', function () {
        addSummaryExcerpt();
      });
    }
  };
});