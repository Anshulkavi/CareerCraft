// src/utils/urlUtils.js

/**
 * Normalize a URL by ensuring it starts with https://www.
 * - Adds https:// if missing
 * - Adds www. if domain doesn't already start with it
 */
export const normalizeUrl = (url) => {
  if (!url) return "";

  let normalized = url.trim();

  // Add protocol if missing
  if (!/^https?:\/\//i.test(normalized)) {
    normalized = `https://${normalized}`;
  }

  // Add www. if missing and domain doesn't already start with it
  try {
    const urlObj = new URL(normalized);
    if (!urlObj.hostname.startsWith("www.")) {
      urlObj.hostname = "www." + urlObj.hostname;
      normalized = urlObj.toString();
    }
  } catch (error) {
    // fallback: just prefix www. before domain (basic case)
    if (!normalized.includes("www.")) {
      normalized = normalized.replace(/^(https?:\/\/)/i, "$1www.");
    }
  }

  return normalized;
};

/**
 * Get a display-friendly version of a URL
 * Removes https:// and www.
 */
export const getDisplayUrl = (url) => {
  if (!url) return "";
  return url
    .replace(/^https?:\/\//i, "")
    .replace(/^www\./i, "");
};
