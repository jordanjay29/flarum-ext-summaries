/* This is part of the ianm/koobid project.

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
import SettingsPage from 'flarum/components/SettingsPage';
import FieldSet from 'flarum/components/FieldSet';
import ItemList from 'flarum/utils/ItemList';
import Switch from 'flarum/components/Switch';
import Stream from 'flarum/utils/Stream';

export default function () {
    extend(SettingsPage.prototype, 'oninit', function () {
        this.showKoobidExcerpts = Stream(this.user.preferences().showKoobidExcerpts);
    });

    extend(SettingsPage.prototype, 'settingsItems', function (items) {
        items.add(
            'koobid',
            FieldSet.component({
                label: app.translator.trans('ianm-koobid.forum.user.settings.summaries-heading'),
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
                state: this.user.preferences().showKoobidExcerpts,
                onchange: (value) => {
                    this.showKoobidExcerptsLoading = true;

                    this.user.savePreferences({ showKoobidExcerpts: value }).then(() => {
                        this.showKoobidExcerptsLoading = false;
                        m.redraw();
                    })
                },
                loading: this.showKoobidExcerptsLoading
            },
            app.translator.trans('ianm-koobid.forum.user.settings.show-summaries')
            ));

        return items;
    }
}