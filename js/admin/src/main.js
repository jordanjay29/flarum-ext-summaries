import app from 'flarum/app';
import SummarySettingsModal from 'flarum/auth/github/components/summarySettingsModal';

app.initializers.add('jordanjay29-summaries', () => {
  app.extensionSettings['jordanjay29-summaries'] = () => app.modal.show(new SummarySettingsModal());
});
