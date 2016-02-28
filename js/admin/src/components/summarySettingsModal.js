import SettingsModal from 'flarum/components/SettingsModal';
import Checkbox from 'flarum/components/Checkbox';

export default class SummarySettingsModal extends SettingsModal {
        className() {
            return 'SummarySettingsModal Modal--small';
        }
        
        title() {
            return 'Summaries Settings';
        }
        
        form() {
            return [
                <div className="Form-group">
                    <label>Summaries Settings</label>
                    <input type="checkbox" name
            ]
        }
}