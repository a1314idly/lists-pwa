// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <div>不管有沒有網路都會顯示的內容</div>
//         <div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
import React, { useState, Component } from 'react';
import './App.css';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import checkLogo from './checked.png';
import uncheckLogo from './crossed.png';
import browser from './browser.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.PWAcont = 0;
    this.IOTcont = 0;
    this.WebBrowser = '';

    this.state = {
      show: false,

      serviceWorker: false,
      SyncManager: false,
      PushManager: false,
      Cache: false,
      PaymentRequest: false,
      share: false,
      canFullscreen: false,

      WebBluetooth: false,
      USB: false,
      WebRTC: false,
      UserMedia: false,
      PowerManagement: false,
      WebSpeech: false,
      Beacon: false,
    };

  }
  handleClose() {
    this.setState(
      {
        show: false
      }
    );
  }
  handleShow() {
    this.setState(
      {
        show: true,
      }
    );

    this.WebBrowser = navigator.userAgent;

    if ('serviceWorker' in navigator) {
      this.setState(
        {
          serviceWorker: true,
        }
      );
      this.PWAcont += 1;
    }
    ////////
    if ('SyncManager' in window) {
      this.setState(
        {
          SyncManager: true,
        }
      );
      this.PWAcont += 1;
    }
    ////////
    if ('PushManager' in window) {
      this.setState(
        {
          PushManager: true,
        }
      );
      this.PWAcont += 1;
    }
    ////////
    if ('Cache' in window) {
      this.setState(
        {
          Cache: true,
        }
      );
      this.PWAcont += 1;
    }
    ////////
    if ('PaymentRequest' in window) {
      this.setState(
        {
          PaymentRequest: true,
        }
      );
      this.PWAcont += 1;
    }
    ////////
    if ('share' in navigator) {
      this.setState(
        {
          share: true,
        }
      );
      this.PWAcont += 1;
    }
    ////////
    const canFullscreen = (function () {
      for (const key of [
        'exitFullscreen',
        'webkitExitFullscreen',
        // 'webkitCancelFullScreen',
        'mozCancelFullScreen',
        'msExitFullscreen',
      ]) {
        if (key in document) {
          return true;
        }
      }
      return false;
    }());
    if (canFullscreen) {
      this.setState(
        {
          canFullscreen: true,
        }
      );
      this.PWAcont += 1;
    }
    ////////
    ////////
    if ('Bluetooth' in window) {
      this.setState(
        {
          WebBluetooth: true,
        }
      );
      this.IOTcont += 1;
    }
    ////////
    if ('USB' in window) {
      this.setState(
        {
          USB: true,
        }
      );
      this.IOTcont += 1;
    }
    ////////
    if ('RTCDataChannel' in window) {
      this.setState(
        {
          WebRTC: true,
        }
      );
      this.IOTcont += 1;
    }
    //////
    if ('getUserMedia' in navigator) {
      this.setState(
        {
          UserMedia: true,
        }
      );
      this.IOTcont += 1;
    }
    ////////
    if ('mozPower' in navigator) {
      this.setState(
        {
          PowerManagement: true,
        }
      );
      this.IOTcont += 1;
    }
    ////////
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      this.setState(
        {
          WebSpeech: true,
        }
      );
      this.IOTcont += 1;
    }
    ////////
    if ('sendBeacon' in navigator) {
      this.setState(
        {
          Beacon: true,
        }
      );
      this.IOTcont += 1;
    }
  }

  render() {
    return (
      <div>
        <div>
          <img src={browser} width="100%" />
        </div>

        <div>
          <div id="left">
            <h1>PWA Browser Support</h1>
            <h3>Detect browser compatibility for Progressive Web App (PWA) features:</h3>
          </div>
        </div>

        <div>
          <div id="content">
            <Button variant="outline-primary" onClick={this.handleShow.bind(this)} >Try</Button>

            <Modal show={this.state.show} onHide={this.handleClose.bind(this)}>
              <Modal.Header closeButton>
                <Modal.Title>Browser compatibility</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <div>
                  <h5>Web Browser:</h5>
                  <p>{this.WebBrowser}</p>
                </div>

                <div>
                  <h4>PWA features:{this.PWAcont}/7</h4>
                  <ul>
                    <li>
                      <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API">Service Worker:   </a>
                      {this.state.serviceWorker ? <img src={checkLogo} /> : <img src={uncheckLogo} />}
                    </li>
                    <li>
                      <a target="_blank" href="https://wicg.github.io/BackgroundSync/spec/#introduction" value="https://wicg.github.io/BackgroundSync/spec/#introduction">Background Sync:    </a>
                      {this.state.SyncManager ? <img src={checkLogo} /> : <img src={uncheckLogo} />}
                    </li>
                    <li>
                      <a target="_blank" href="https://developer.mozilla.org/pl/docs/Web/API/Push_API" title="https://developer.mozilla.org/pl/docs/Web/API/Push_API">Push Notifications:   </a>
                      {this.state.PushManager ? <img src={checkLogo} /> : <img src={uncheckLogo} />}
                    </li>
                    <li>
                      <a target="_blank" href="https://developer.mozilla.org/pl/docs/Web/API/Cache" title="https://developer.mozilla.org/pl/docs/Web/API/Cache">Cache Storage (Offline):    </a>
                      {this.state.Cache ? <img src={checkLogo} /> : <img src={uncheckLogo} />}
                    </li>
                    <li>
                      <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API" title="https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API">Payments:   </a>
                      {this.state.PaymentRequest ? <img src={checkLogo} /> : <img src={uncheckLogo} />}
                    </li>
                    <li>
                      <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share" title="https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share">Share:    </a>
                      {this.state.share ? <img src={checkLogo} /> : <img src={uncheckLogo} />}
                    </li>
                    <li>
                      <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API" title="https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API">Fullscreen:   </a>
                      {this.state.canFullscreen ? <img src={checkLogo} /> : <img src={uncheckLogo} />}
                    </li>
                  </ul>
                </div>

                <div>
                  <h4>IOT features:{this.IOTcont}/7</h4>
                  <ul>
                    <li>
                      <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API" title="https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API">Web Bluetooth:    </a>
                      {this.state.WebBluetooth ? <img src={checkLogo} /> : <img src={uncheckLogo} />}
                    </li>
                    <li>
                      <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/USB" value="https://developer.mozilla.org/en-US/docs/Web/API/USB">Web USB:    </a>
                      {this.state.USB ? <img src={checkLogo} /> : <img src={uncheckLogo} />}
                    </li>
                    <li>
                      <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Glossary/WebRTC" title="https://developer.mozilla.org/en-US/docs/Glossary/WebRTC">Web RTC Data Channels:    </a>
                      {this.state.WebRTC ? <img src={checkLogo} /> : <img src={uncheckLogo} />}
                    </li>
                    <li>
                      <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getUserMedia" title="https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getUserMedia">Video/Camera Access:    </a>
                      {this.state.UserMedia ? <img src={checkLogo} /> : <img src={uncheckLogo} />}
                    </li>
                    <li>
                      <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Archive/B2G_OS/API/Power_Management_API" title="https://developer.mozilla.org/en-US/docs/Archive/B2G_OS/API/Power_Management_API">Power Management:   </a>
                      {this.state.PowerManagement ? <img src={checkLogo} /> : <img src={uncheckLogo} />}
                    </li>
                    <li>
                      <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/" title="https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/">Voice Rec / Text-to-speech:   </a>
                      {this.state.WebSpeech ? <img src={checkLogo} /> : <img src={uncheckLogo} />}
                    </li>
                    <li>
                      <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Beacon_API" title="https://developer.mozilla.org/en-US/docs/Web/API/Beacon_API">Beacons:    </a>
                      {this.state.Beacon ? <img src={checkLogo} /> : <img src={uncheckLogo} />}
                    </li>
                  </ul>
                </div>

              </Modal.Body>

              <Modal.Footer>
                <Button variant="outline-primary" onClick={this.handleClose.bind(this)}>
                  Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
