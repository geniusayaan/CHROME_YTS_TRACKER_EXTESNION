// Grab UI elements
const emailInput = document.getElementById('user-email');
const passInput  = document.getElementById('user-pass');
const toggleBtn  = document.getElementById('toggle-btn');
const statusDiv  = document.getElementById('status');
const testSoundBtn = document.getElementById('test-sound-btn');
const alertSound = document.getElementById('alert-sound');

let isChecking = false;

// Load saved credentials on popup open
chrome.storage.local.get(['vfsEmail', 'vfsPass'], ({ vfsEmail, vfsPass }) => {
  if (vfsEmail) emailInput.value = vfsEmail;
  if (vfsPass) passInput.value = vfsPass;
});

// Save credentials on change
emailInput.addEventListener('change', () => {
  chrome.storage.local.set({ vfsEmail: emailInput.value });
});
passInput.addEventListener('change', () => {
  chrome.storage.local.set({ vfsPass: passInput.value });
});

// Toggle checking on/off
function toggleChecking() {
  isChecking = !isChecking;
  toggleBtn.textContent = isChecking ? 'Stop Checking' : 'Start Checking';
  statusDiv.textContent = isChecking ? 'Status: Running...' : 'Status: Idle';
  chrome.runtime.sendMessage({ action: isChecking ? 'start' : 'stop' });
}

toggleBtn.addEventListener('click', toggleChecking);
testSoundBtn.addEventListener('click', () => alertSound.play());

// Listen for status updates
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.status) {
    statusDiv.textContent = `Status: ${msg.status}`;
    if (msg.status === 'SlotFound') alertSound.play();
  }
});
