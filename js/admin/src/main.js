import app from 'flarum/app';
import SummarySettingsModal from 'jordanjay29/summaries/components/summarySettingsModal';

app.initializers.add('jordanjay29-summaries', () => {
  app.extensionSettings['jordanjay29-summaries'] = () => app.modal.show(new SummarySettingsModal());
});
