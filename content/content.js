chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === 'checkSlots') {
    checkAppointmentSlots();
  }
});

function checkAppointmentSlots() {
  const usernameInput = document.querySelector('#Username');
  const passwordInput = document.querySelector('#Password');
  const loginButton = document.querySelector('button[type="submit"]');

  if (usernameInput && passwordInput && loginButton) {
    usernameInput.value = 'afhgfhgly66416@gmail.com';
    passwordInput.value = 'Shakir@123';
    loginButton.click();
    return;
  }

  const appointmentLink = document.querySelector('a[href*="/appointment"]');
  if (appointmentLink) {
    appointmentLink.click();
    return;
  }

  const noSlotsNotice = document.querySelector('.no-availability-message');
  if (!noSlotsNotice) {
    chrome.runtime.sendMessage({ status: 'SlotFound' });
    playSoundAlert();
  }
}

function playSoundAlert() {
  const audio = new Audio(chrome.runtime.getURL('../icons/alert.mp3'));
  audio.play();
}