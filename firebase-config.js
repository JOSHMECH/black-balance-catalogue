/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           BLACK BALANCE — FIREBASE CONFIGURATION                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  STEP-BY-STEP SETUP:                                                 ║
 * ║                                                                      ║
 * ║  1. Go to https://console.firebase.google.com                        ║
 * ║  2. Click "Add Project" → name it "black-balance"                    ║
 * ║  3. Once created, click the </> Web icon to register a web app       ║
 * ║  4. Copy the firebaseConfig values into the object below             ║
 * ║                                                                      ║
 * ║  5. Enable Firestore:                                                ║
 * ║     Build → Firestore Database → Create Database                     ║
 * ║     Start in TEST MODE → choose a region → Done                      ║
 * ║                                                                      ║
 * ║  6. Enable Storage:                                                  ║
 * ║     Build → Storage → Get Started                                    ║
 * ║     Start in TEST MODE → Done                                        ║
 * ║                                                                      ║
 * ║  7. Set Firestore Rules (Build → Firestore → Rules tab):             ║
 * ║     Paste the rules from the bottom of this file                     ║
 * ║                                                                      ║
 * ║  8. Set Storage Rules (Build → Storage → Rules tab):                 ║
 * ║     Paste the rules from the bottom of this file                     ║
 * ║                                                                      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

/**
 * ─────────────────────────────────────────────────────────────────────
 * ADMIN PASSWORD — Change this before going live!
 * ─────────────────────────────────────────────────────────────────────
 */
const ADMIN_PASSWORD = "BlackBalance2024!";


/* ═══════════════════════════════════════════════════════════════════════
   FIRESTORE RULES — Paste into: Build > Firestore Database > Rules
   ═══════════════════════════════════════════════════════════════════════

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /products/{id} {
      allow read: if true;
      allow write: if true;
    }
    match /waitlist/{id} {
      allow read: if true;
      allow write: if true;
    }
  }
}

   ═══════════════════════════════════════════════════════════════════════
   STORAGE RULES — Paste into: Build > Storage > Rules
   ═══════════════════════════════════════════════════════════════════════

rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /products/{allPaths=**} {
      allow read: if true;
      allow write: if true;
    }
  }
}

   ═══════════════════════════════════════════════════════════════════════ */
