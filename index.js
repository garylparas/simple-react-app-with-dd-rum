import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Datacenter, datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: '<DATADOG_APPLICATION_ID>',
    clientToken: '<DATADOG_CLIENT_TOKEN>',
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
const root = createRoot(container);
root.render(<App />);