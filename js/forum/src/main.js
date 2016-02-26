import { extend, notificationType } from 'flarum/extend';
import app from 'flarum/app';

import addSummaryExcerpt from 'jordanjay29/summaries/addSummaryExcerpt';

app.initializers.add('jordanjay29-summaries', () => {
  addSummaryExcerpt();
});