let intervalId = null;
let currentStatus = 'Idle';
const CHECK_INTERVAL_MS = 60000 * 5; // 60 seconds * 5 min

function updatePopupStatus() {
  chrome.storage.local.get(['count', 'last'], ({ count, last }) => {
    chrome.runtime.sendMessage({
      type: 'statusUpdate',
      status: currentStatus,
      count: count || 0,
      last: last || '—'
    });
  });
}

// Main checking function
function performCheck() {
  chrome.tabs.query({ url: 'https://visa.vfsglobal.com/*' }, (tabs) => {
    if (tabs.length === 0) return;

    const tabId = tabs[0].id;

    // Send message to content script
    chrome.tabs.sendMessage(tabId, { action: 'checkSlot' });

    // Update rain counter
    chrome.storage.local.get(['count'], (data) => {
      const newCount = (data.count || 0) + 1;
      const now = new Date().toLocaleTimeString();
      chrome.storage.local.set({ count: newCount, last: now });
      updatePopupStatus();
    });
  });
}

// Start checking in background
function startRain() {
  if (intervalId) return;

  currentStatus = 'Running';
  chrome.storage.local.set({ status: currentStatus });
  updatePopupStatus();

  performCheck();
  intervalId = setInterval(performCheck, CHECK_INTERVAL_MS);
}

// Pause checking
function pauseRain() {
  if (!intervalId) return;
  clearInterval(intervalId);
  intervalId = null;
  currentStatus = 'Paused';
  chrome.storage.local.set({ status: currentStatus });
  updatePopupStatus();
}

// Resume from pause
function resumeRain() {
  if (intervalId) return;
  currentStatus = 'Running';
  chrome.storage.local.set({ status: currentStatus });
  updatePopupStatus();
  intervalId = setInterval(performCheck, CHECK_INTERVAL_MS);
}

// Stop everything
function stopRain() {
  clearInterval(intervalId);
  intervalId = null;
  currentStatus = 'Stopped';
  chrome.storage.local.set({ status: currentStatus });
  updatePopupStatus();
}

// Handle messages from popup
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === 'start') startRain();
  if (msg.action === 'pause') pauseRain();
  if (msg.action === 'resume') resumeRain();
  if (msg.action === 'stop') stopRain();
});

// If service worker restarts, resume if needed
chrome.runtime.onStartup.addListener(() => {
  chrome.storage.local.get('status', (data) => {
    if (data.status === 'Running') {
      startRain();
    }
  });
});
