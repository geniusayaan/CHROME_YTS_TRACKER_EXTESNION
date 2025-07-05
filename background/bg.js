let checkIntervalId = null;
const CHECK_INTERVAL = 60 * 1000;

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === 'start') {
    startChecking();
  } else if (msg.action === 'stop') {
    stopChecking();
  }
});

function startChecking() {
  if (checkIntervalId) return;
  runCheck();
  checkIntervalId = setInterval(runCheck, CHECK_INTERVAL);
  chrome.runtime.sendMessage({ status: 'Running' });
}

function stopChecking() {
  if (checkIntervalId) {
    clearInterval(checkIntervalId);
    checkIntervalId = null;
    chrome.runtime.sendMessage({ status: 'Stopped' });
  }
}

function runCheck() {
  chrome.tabs.query({ url: 'https://visa.vfsglobal.com/*' }, (tabs) => {
    if (tabs.length === 0) {
      chrome.tabs.create({ url: 'https://visa.vfsglobal.com/dza/en/mlt/login' });
    } else {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'checkSlots' });
    }
  });
}