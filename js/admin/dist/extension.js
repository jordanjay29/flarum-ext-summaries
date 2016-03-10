System.register('jordanjay29/summaries/components/summarySettingsModal', ['flarum/components/SettingsModal'], function (_export) {
    'use strict';

    var SettingsModal, SummarySettingsModal;
    return {
        setters: [function (_flarumComponentsSettingsModal) {
            SettingsModal = _flarumComponentsSettingsModal['default'];
        }],
        execute: function () {
            SummarySettingsModal = (function (_SettingsModal) {
                babelHelpers.inherits(SummarySettingsModal, _SettingsModal);

                function SummarySettingsModal() {
                    babelHelpers.classCallCheck(this, SummarySettingsModal);
                    babelHelpers.get(Object.getPrototypeOf(SummarySettingsModal.prototype), 'constructor', this).apply(this, arguments);
                }

                babelHelpers.createClass(SummarySettingsModal, [{
                    key: 'className',
                    value: function className() {
                        return 'SummarySettingsModal Modal--small';
                    }
                }, {
                    key: 'title',
                    value: function title() {
                        return 'Summaries Settings';
                    }
                }, {
                    key: 'form',
                    value: function form() {
                        return [m(
                            'div',
                            { className: 'Form-group' },
                            m(
                                'label',
                                null,
                                'Summaries Settings'
                            ),
                            m(
                                'p',
                                null,
                                'Summary excerpt length in characters (default is 200)'
                            ),
                            m('input', { className: 'FormControl', bidi: this.setting('flarum-ext-summaries.excerpt_length') })
                        )];
                    }
                }]);
                return SummarySettingsModal;
            })(SettingsModal);

            _export('default', SummarySettingsModal);
        }
    };
});;
System.register('jordanjay29/summaries/main', ['flarum/app', 'jordanjay29/summaries/components/summarySettingsModal'], function (_export) {
  'use strict';

  var app, SummarySettingsModal;
  return {
    setters: [function (_flarumApp) {
      app = _flarumApp['default'];
    }, function (_jordanjay29SummariesComponentsSummarySettingsModal) {
      SummarySettingsModal = _jordanjay29SummariesComponentsSummarySettingsModal['default'];
    }],
    execute: function () {

      app.initializers.add('jordanjay29-summaries', function () {
        app.extensionSettings['jordanjay29-summaries'] = function () {
          return app.modal.show(new SummarySettingsModal());
        };
      });
    }
  };
});