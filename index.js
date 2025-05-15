import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Datacenter, datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: 'bc202dc8-0447-48c2-a239-10871971c9ef',
    clientToken: 'pub08cce816a30dc0b7c00c4772424d197d',
    site: 'datadoghq.com',
    service: 'gparas-test',
    env: 'dev',
    version: '1.0.0',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 100,
    defaultPrivacyLevel: 'mask-user-input',
    proxy: 'http://localhost:8080/',
});

class App extends React.Component {
  render() {
    return <div>Hello World1!</div>;
  }
}

const container = document.getElementById('root');
const root = createRoot(container);  // ✅ React 18
root.render(<App />);