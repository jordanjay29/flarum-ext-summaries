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

import app from 'flarum/app';

function typeOptions() {
  let opts;
  (opts = ['first', 'last'].reduce((o, key) => {
    o[key] = app.translator.trans(`ianm-koobid.admin.settings.${key}-label`);

    return o;
  }, {}));
  return opts;
};

app.initializers.add('ianm-koobid', () => {
  app.extensionData.for('ianm-koobid')
    .registerSetting({
      label: app.translator.trans('ianm-koobid.admin.settings.excerpt-label'),
      setting: 'ianm-koobid.excerpt_length',
      type: 'number',
    })
    .registerSetting({
      label: app.translator.trans('ianm-koobid.admin.settings.rich-excerpts'),
      setting: 'ianm-koobid.rich-excerpts',
      type: 'boolean',
    })
    .registerSetting({
      label: app.translator.trans('ianm-koobid.admin.settings.excerpt-type'),
      setting: 'ianm-koobid.excerpt-type',
      options: typeOptions(),
      type: 'select'
    });
});
