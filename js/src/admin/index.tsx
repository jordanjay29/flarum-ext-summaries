import app from 'flarum/admin/app';
import extendEditTagModal from './extendEditTagModal';
import typeOptions from './util/typeOptions';

app.initializers.add('ianm-synopsis', () => {
  app.extensionData
    .for('ianm-synopsis')
    .registerSetting(function () {
      const hasTags = app.initializers.has('flarum-tags');

      return hasTags ? <div className="Form-group">
        <p className="helpText">{app.translator.trans('ianm-synopsis.admin.settings.tags-enabled')}</p>
      </div> : '';
    })
    .registerSetting({
      label: app.translator.trans('ianm-synopsis.admin.settings.excerpt-length.label'),
      help: app.translator.trans('ianm-synopsis.admin.settings.excerpt-length.help'),
      setting: 'ianm-synopsis.excerpt_length',
      type: 'number',
    })
    .registerSetting({
      label: app.translator.trans('ianm-synopsis.admin.settings.rich-excerpts.label'),
      help: app.translator.trans('ianm-synopsis.admin.settings.rich-excerpts.help'),
      setting: 'ianm-synopsis.rich-excerpts',
      type: 'boolean',
    })
    .registerSetting({
      label: app.translator.trans('ianm-synopsis.admin.settings.excerpt-type.label'),
      help: app.translator.trans('ianm-synopsis.admin.settings.excerpt-type.help'),
      setting: 'ianm-synopsis.excerpt-type',
      options: typeOptions(),
      type: 'select',
    });

  extendEditTagModal();
});
