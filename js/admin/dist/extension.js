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
                            m('input', { className: 'FormControl', bidi: this.setting('flarum-ext-summaries.excerpt_length') })
                        )];
                    }
                }]);
                return SummarySettingsModal;
            })(SettingsModal);

            _export('default', SummarySettingsModal);
        }
    };
});