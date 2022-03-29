import { TextInput } from '@components/settings';
import { React } from '@webpack/common';

export default class extends React.Component {
   render() {
      const settings = this.props.settings;

      return <TextInput
         title='Background Image URL'
         onChange={v => settings.set('bg-url', v)}
         description='The background to use accross the app.'
         value={settings.get('bg-url', 'https://media.wtf/12931870')}
      />;
   }
};