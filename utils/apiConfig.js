/**
 * Centralized API Configuration
 *
 * Replace GOOGLE_SHEET_URL with your deployed Google Apps Script Web App URL.
 * Example: https://script.google.com/macros/s/AKfycbx.../exec
 */
export const API_CONFIG = {
  GOOGLE_SHEET_URL:
    (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_GOOGLE_SHEET_URL)
      ? import.meta.env.VITE_GOOGLE_SHEET_URL
      : "https://script.google.com/macros/s/AKfycbwtXzvM1NoZL_iHyNzaudriU32w3YEG5-0dPpR0uhUf3PsTQzvpxcSzMRqViIaYbbBG/exec",
};
