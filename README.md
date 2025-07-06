<h1 align="center">🌐 VFS Global Appointment Checker 🔔</h1>

<p align="center">
  <strong>An elegant, auto-alert Chrome extension that monitors <a href="https://visa.vfsglobal.com" target="_blank">visa.vfsglobal.com</a> for appointment slots — and notifies you instantly.</strong><br>
  🎯 Designed for busy applicants, built for peace of mind.
</p>

---

## ✨ Features

- 🧠 **Intelligent Background Monitoring** — checks every few minutes, even if you're busy elsewhere.
- 🔊 **Loud & Clear Alerts** — plays a custom sound when slots are detected.
- 🔔 **Browser Notifications** — so you never miss an opportunity.
- ⏱ **Custom Check Interval** — choose how often to check.
- ▶️ **Start / ⏸ Pause / ⏹ Stop / 🔁 Resume** — full control at your fingertips.
- 🧪 **“Test Alert” Button** — preview sound & notification instantly.
- 📈 **Stats Display** — number of checks and last checked time.
- 🎨 **Stylish UI** — music-player-inspired popup: modern, clean, responsive.
- 💾 **Auto-saves Preferences** — your settings persist between sessions.

---

## 🧩 File Structure

my-vfs-extension/
├── background/
│ └── bg.js # Background service worker logic
├── content/
│ └── content.js # Injected into VFS site to detect slots
├── popup/
│ ├── popup.html # Extension popup UI
│ └── popup.js # Popup behavior and controls
├── icons/
│ ├── icon128.png # Extension icon
│ └── alert.mp3 # Sound file for alert
├── manifest.json # Chrome extension configuration
└── README.md # This file





---

## 🚀 How to Install (20 seconds)

1. 📁 Clone or download this folder  
2. 🧩 Open Chrome and go to `chrome://extensions`  
3. ⚙️ Turn on **Developer Mode** (top right)  
4. 📂 Click **Load unpacked**  
5. ✅ Select the `my-vfs-extension` folder  
6. 📌 Pin the extension icon (optional)  
7. 🎉 You're ready to go!

---

## 📸 UI Preview

Lightweight & Responsive 🎧

<img src="https://via.placeholder.com/320x240?text=VFS+Checker+Popup+UI" alt="VFS Checker Popup UI" width="300"/>

---

## 🛠 How It Works

1. **You manually log in** to [visa.vfsglobal.com](https://visa.vfsglobal.com)  
2. Click ▶️ **Start** in the extension popup  
3. It runs in the background at your chosen interval  
4. When a slot is found:
   - 🛎 Plays a sound
   - 🔔 Shows a notification
   - ⛔ Automatically stops checking so you can book ASAP

💡 Press **Test Alert** anytime to preview alerts.

---

## 📚 Developer Notes

- **Manifest Version**: 3  
- ✅ No third-party libraries  
- ⚙️ Built with **vanilla JS**, **HTML**, and **CSS**  
- 💤 Battery-friendly: Service worker sleeps when idle

---

## ⚠️ Troubleshooting

| Problem                            | Solution                                                                 |
|-----------------------------------|--------------------------------------------------------------------------|
| "Receiving end does not exist"    | Reload the VFS tab — content script must be active                       |
| 🔇 Sound doesn’t play             | Click **Test Alert** once to grant audio permission                      |
| 🔕 No notification shown          | Go to Chrome → Site Settings → Notifications → Allow                     |
| 💤 Extension shows "Inactive"     | Normal behavior — service workers sleep until triggered                  |

---

## 🔮 Future Ideas

- 🔐 Auto login with stored credentials (optional)
- 🌍 Multi-country / multi-city monitoring
- 📤 Export slot logs to CSV or Google Sheets
- 🌓 Light/Dark Color Themes

---

## 🧠 Made for peace of mind.  
Never miss a visa slot again.

