🌐 VFS Global Appointment Checker 🔔

An elegant, auto-alert Chrome extension that continuously monitors visa.vfsglobal.com for available appointment slots — and notifies you instantly with sound & notification.

🎯 Designed for busy applicants, built for peace of mind.

✨ Features
🧠 Intelligent Background Monitoring — checks every few minutes, even if you're doing other tasks.

🔊 Loud & Clear Alerts — plays a custom sound when slots are detected.

🔔 Browser Notifications — so you never miss an opportunity.

⏱ Custom Check Interval — choose how often you want it to check.

▶️ Start / ⏸ Pause / ⏹ Stop / 🔁 Resume options.

🧪 “Test Alert” Button — preview sound & notifications instantly.

📈 Stats — shows how many times it checked, and last check time.

🎨 Stylish UI — a music-player-like popup, modern, clean, and smooth.

💾 Auto-saves preferences — your interval and settings persist between sessions.



🧩 File Structure
my-vfs-extension/
├── background/
│   └── bg.js             # Background service worker logic
├── content/
│   └── content.js        # Injected into VFS site to detect slots
├── popup/
│   ├── popup.html        # Extension popup UI
│   └── popup.js          # Popup behavior and controls
├── icons/
│   ├── icon128.png       # Extension icon
│   └── alert.mp3         # Sound file for alert
├── manifest.json         # Chrome extension configuration
└── README.md             # This file


🚀 How to Install (In 20 Seconds)
Clone or download this folder

Open Chrome and go to chrome://extensions

Turn on Developer Mode (top right)

Click Load unpacked

Select the my-vfs-extension folder

Pin the extension icon (optional)

Done! 🎉

📸 UI Preview
Lightweight & Responsive 🎧

<img src="https://via.placeholder.com/320x240?text=VFS+Checker+Popup+UI" alt="Popup UI" width="300"/>
🛠 How It Works
You log in manually to https://visa.vfsglobal.com.

Click ▶ Start in the extension popup.

It checks in the background based on your chosen interval.

When a slot is found:

🛎 It plays a sound

🔔 It shows a browser notification

🎉 It stops the search so you can book immediately!

You can also press the Test Alert button to preview the notification + sound.

📚 Developer Notes
Manifest Version: 3

No third-party libraries used.

Built using vanilla JS + HTML + CSS.

Service worker stays asleep until needed — battery & memory friendly.

⚠️ Troubleshooting
Problem	Fix
"Receiving end does not exist"	Reload the VFS tab; content script must be active.
Sound doesn’t play	Press "Test Alert" once to grant audio permission.
No notification shown	Check Chrome → Site Settings → Notifications.
Extension says "Inactive"	That’s okay — Chrome sleeps service workers until triggered.

🔮 Ideas for Future
Auto login using stored credentials (optional)

Multi-country and multi-city slot monitoring

Export slot logs to CSV or Google Sheets

Color themes (light/dark)
