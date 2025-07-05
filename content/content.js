// content/content.js

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === 'checkSlots') {
    checkForSlot();
  }
});

// This function checks if a slot is available
function checkForSlot() {
  // Modify this selector based on the actual DOM structure after login
  const slotElement = document.querySelector('.slots-available, .calendar-slot, .inventory_list');

  if (slotElement) {
    console.log('[VFS Checker] Slot detected!');

    // Notify background/popup
    chrome.runtime.sendMessage({ slotFound: true });

    // Get repeat count from storage
    chrome.storage.local.get(['soundRepeat'], ({ soundRepeat }) => {
      const times = parseInt(soundRepeat || 3);
      const sound = new Audio(chrome.runtime.getURL('../icons/alert.mp3'));

      let played = 0;
      const interval = setInterval(() => {
        sound.play();
        played++;
        if (played >= times) clearInterval(interval);
      }, 1200); // play every 1.2s
    });
  } else {
    console.log('[VFS Checker] No slot found this time.');
  }
}
