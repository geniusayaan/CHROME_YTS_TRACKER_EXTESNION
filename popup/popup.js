// Get all elements from popup
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resumeBtn = document.getElementById('resume-btn');
const stopBtn = document.getElementById('stop-btn');
const statusText = document.getElementById('status');
const checkCount = document.getElementById('check-count');
const lastChecked = document.getElementById('last-checked');
const testSoundBtn = document.getElementById('test-sound-btn');
const soundCountInput = document.getElementById('sound-count');
const alertSound = document.getElementById('alert-sound');

// Update popup with latest data
function loadStatus() {
  chrome.storage.local.get(
    ['status', 'count', 'last', 'soundRepeat'],
    ({ status, count, last, soundRepeat }) => {
      statusText.textContent = status || 'Idle';
      checkCount.textContent = count || 0;
      lastChecked.textContent = last || '—';
      soundCountInput.value = soundRepeat || 3;
    }
  );
}

// Save number of alert repeats
soundCountInput.addEventListener('change', () => {
  const value = parseInt(soundCountInput.value) || 3;
  chrome.storage.local.set({ soundRepeat: value });
});

// Test alert button
testSoundBtn.addEventListener('click', () => {
  const repeats = parseInt(soundCountInput.value) || 3;
  for (let i = 0; i < repeats; i++) {
    setTimeout(() => alertSound.play(), i * 800); // gap between beeps
  }
});

// Button actions: Start, Pause, Resume, Stop
startBtn.onclick = () => chrome.runtime.sendMessage({ action: 'start' });
pauseBtn.onclick = () => chrome.runtime.sendMessage({ action: 'pause' });
resumeBtn.onclick = () => chrome.runtime.sendMessage({ action: 'resume' });
stopBtn.onclick = () => chrome.runtime.sendMessage({ action: 'stop' });

// Listen to background updates
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === 'statusUpdate') {
    statusText.textContent = msg.status || 'Idle';
    checkCount.textContent = msg.count || 0;
    lastChecked.textContent = msg.last || '—';
  }
});

document.addEventListener('DOMContentLoaded', loadStatus);
