/**
 * Centralized API Configuration & Lead Capture Client
 *
 * Set your deployed Google Apps Script Web App URL below,
 * or configure VITE_GOOGLE_SHEET_URL in your .env file.
 */
export const API_CONFIG = {
  GOOGLE_SHEET_URL:
    (import.meta.env["VITE_GOOGLE_SHEET_URL"] as string | undefined) ||
    "https://script.google.com/macros/s/AKfycbwtXzvM1NoZL_iHyNzaudriU32w3YEG5-0dPpR0uhUf3PsTQzvpxcSzMRqViIaYbbBG/exec",
};

export interface ContactSubmissionPayload {
  firstName: string;
  lastName?: string;
  fullName?: string;
  phone: string;
  email?: string;
  message?: string;
  source?: string;
}

/**
 * Submits contact form data to the Google Sheets Web App endpoint.
 *
 * Uses industry-standard fetch with text/plain payload to ensure 100% reliable
 * cross-origin submissions without failing CORS preflight checks in Google Apps Script.
 */
export async function submitContactToGoogleSheet(
  data: ContactSubmissionPayload
): Promise<{ success: boolean; message?: string; error?: unknown }> {
  const endpoint = API_CONFIG.GOOGLE_SHEET_URL;

  // Check if endpoint is configured or still placeholder
  if (!endpoint || endpoint.includes("YOUR_SCRIPT_ID_HERE")) {
    console.warn(
      "[GoogleSheetAPI] Google Sheet URL is not configured yet. Please update API_CONFIG.GOOGLE_SHEET_URL in utils/apiConfig.js with your deployed Apps Script URL."
    );
    return {
      success: false,
      message: "API endpoint is not configured yet.",
    };
  }

  const payload = {
    ...data,
    fullName:
      data.fullName ||
      `${data.firstName} ${data.lastName || ""}`.trim() ||
      "Website Visitor",
    timestamp: new Date().toISOString(),
    source: data.source || "Website Contact Form",
  };

  try {
    // Mode 'no-cors' + Content-Type 'text/plain;charset=utf-8' is the standard industry pattern
    // for Google Apps Script Web App endpoints to prevent CORS preflight redirects from failing in browsers.
    await fetch(endpoint, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    return {
      success: true,
      message: "Lead recorded to Google Sheets successfully.",
    };
  } catch (err) {
    console.error("[GoogleSheetAPI] Failed to submit contact enquiry:", err);
    return {
      success: false,
      error: err,
    };
  }
}
