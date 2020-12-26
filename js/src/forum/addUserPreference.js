import { extend, override } from 'flarum/extend';
import SettingsPage from 'flarum/components/SettingsPage';
import FieldSet from 'flarum/components/FieldSet';
import ItemList from 'flarum/utils/ItemList';
import Switch from 'flarum/components/Switch';
import Stream from 'flarum/utils/Stream';

export default function () {
    extend(SettingsPage.prototype, 'oninit', function () {
        this.showSummaryExcerpts = Stream(this.user.preferences().showSummaryExcerpts);
    });

    extend(SettingsPage.prototype, 'settingsItems', function (items) {
        items.add(
            'summariesplus',
            FieldSet.component({
                label: app.translator.trans('ianm-summariesplus.forum.user.settings.summaries-heading'),
                className: 'Settings-Summaries',
            },
            this.summariesItems().toArray()
            ));
    });

    SettingsPage.prototype['summariesItems'] = function () {
        const items = new ItemList();

        items.add(
            'summary-excerpts',
            Switch.component({
                state: this.user.preferences().showSummaryExcerpts,
                onchange: (value) => {
                    this.showSummaryExcerptsLoading = true;

                    this.user.savePreferences({ showSummaryExcerpts: value }).then(() => {
                        this.showSummaryExcerptsLoading = false;
                        m.redraw();
                    })
                },
                loading: this.showSummaryExcerptsLoading
            },
            app.translator.trans('ianm-summariesplus.forum.user.settings.show-summaries')
            ));

        return items;
    }
}