/**
 * ==============================================================================
 * BENCHMARK NAME BOARDS — GOOGLE APPS SCRIPT LEAD CAPTURE BACKEND
 * ==============================================================================
 *
 * HOW TO DEPLOY THIS SCRIPT:
 * ------------------------------------------------------------------------------
 * 1. Open Google Sheets (https://sheets.google.com) and create a New Spreadsheet.
 *    Name it e.g.: "Benchmark Name Boards - Website Inquiries"
 *
 * 2. In the top menu, go to:
 *    Extensions > Apps Script
 *
 * 3. Delete any default code in the editor, and paste the ENTIRE contents of this file.
 *
 * 4. (Optional) You can customize the SHEET_NAME below if you want a specific tab.
 *
 * 5. Click the blue "Deploy" button at the top right > Select "New deployment".
 *
 * 6. In the deployment modal:
 *    - Click the gear icon (⚙️) next to "Select type" and choose: "Web app"
 *    - Description: "Benchmark Contact Form API v1"
 *    - Execute as: "Me" (your Google account)
 *    - Who has access: "Anyone"  <-- CRITICAL: MUST BE SET TO "Anyone"
 *
 * 7. Click "Deploy".
 *    - Google will prompt you to "Authorize access".
 *    - Click "Review permissions" > Choose your Google Account.
 *    - If you see "Google hasn't verified this app", click "Advanced" > "Go to Untitled project (unsafe)".
 *    - Click "Allow".
 *
 * 8. Copy the generated "Web app URL" (ends in /exec):
 *    Example: https://script.google.com/macros/s/AKfycbx.../exec
 *
 * 9. Paste this URL into:
 *    - utils/apiConfig.js (or src/utils/apiConfig.ts)
 *    - Or in your .env file as: VITE_GOOGLE_SHEET_URL=https://script.google.com/.../exec
 *
 * ==============================================================================
 */

// Target sheet name inside your spreadsheet (leave blank to use the active sheet)
const SHEET_NAME = "Inquiries";

/**
 * Handle HTTP GET Requests (Health Check)
 */
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      status: "online",
      service: "Benchmark Name Boards Google Sheets API",
      timestamp: new Date().toISOString(),
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Handle HTTP POST Requests (Form Submission)
 */
function doPost(e) {
  // Use a ScriptLock to prevent concurrent writes from overwriting rows
  const lock = LockService.getScriptLock();
  const hasLock = lock.tryLock(10000); // Wait up to 10 seconds

  if (!hasLock) {
    return ContentService.createTextOutput(
      JSON.stringify({
        result: "error",
        message: "Server is busy processing another request. Please try again.",
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = SHEET_NAME ? ss.getSheetByName(SHEET_NAME) : ss.getActiveSheet();

    // If sheet name doesn't exist, create it or use first sheet
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
    }

    // Parse the payload (supports both JSON body and urlencoded form parameters)
    let data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        data = e.parameter || {};
      }
    } else if (e.parameter) {
      data = e.parameter;
    }

    // Initialize Headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      const headers = [
        "Timestamp (IST)",
        "First Name",
        "Last Name",
        "Full Name",
        "Phone / WhatsApp",
        "Email",
        "Message / Requirements",
        "Source",
        "Status",
      ];
      sheet.appendRow(headers);

      // Professional styling for header row (Benchmark Dark Brand Color)
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#5D5D5D");
      headerRange.setFontColor("#FFFFFF");
      headerRange.setHorizontalAlignment("center");
      sheet.setFrozenRows(1);

      // Auto-fit column widths
      for (let i = 1; i <= headers.length; i++) {
        sheet.setColumnWidth(i, 160);
      }
      sheet.setColumnWidth(7, 320); // Wider for message
    }

    // Format current timestamp in Indian Standard Time (IST)
    const formattedTimestamp = Utilities.formatDate(
      new Date(),
      "Asia/Kolkata",
      "yyyy-MM-dd HH:mm:ss"
    );

    const firstName = data.firstName || data["First Name"] || "";
    const lastName = data.lastName || data["Last Name"] || "";
    const fullName =
      data.fullName ||
      (firstName + (lastName ? " " + lastName : "")).trim() ||
      "Website Visitor";
    const phone = data.phone || data["Phone"] || "";
    const email = data.email || data["Email"] || "";
    const message = data.message || data["Message"] || "";
    const source = data.source || "Website Contact Form";
    const status = "New Lead";

    // Row data aligned with headers
    const row = [
      formattedTimestamp,
      firstName,
      lastName,
      fullName,
      phone,
      email,
      message,
      source,
      status,
    ];

    sheet.appendRow(row);

    // Format phone column as plain text to prevent leading zero or + stripping
    const newRowNum = sheet.getLastRow();
    sheet.getRange(newRowNum, 5).setNumberFormat("@");

    return ContentService.createTextOutput(
      JSON.stringify({
        result: "success",
        message: "Contact enquiry recorded successfully.",
        row: newRowNum,
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        result: "error",
        message: error.toString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
