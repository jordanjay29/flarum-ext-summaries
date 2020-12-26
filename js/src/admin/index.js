import app from 'flarum/app';

app.initializers.add('jordanjay29-summaries', () => {
    app.extensionData.for('jordanjay29-summaries').registerSetting({
        label: app.translator.trans('jordanjay-summaries.admin.settings.excerpt-label'),
        setting: 'flarum-ext-summaries.excerpt_length',
        type: 'number',
    });
});
