/**
 * handleShare — Reusable Web Share API utility with WhatsApp fallback.
 *
 * Behaviour:
 *  - Uses `navigator.share` on supporting devices (iOS / Android).
 *  - Silently swallows AbortError (user dismissed the native share sheet).
 *  - Falls back to opening a WhatsApp Web share link in a new tab on
 *    desktop browsers that don't implement the API.
 */

export interface ShareData {
  title: string;
  text: string;
  url?: string;
}

export async function handleShare(shareData: ShareData): Promise<void> {
  const url = shareData.url ?? window.location.href;

  // ── Native Share API (iOS, Android, some desktop Chromium) ──────────────
  if (typeof navigator !== 'undefined' && navigator.share) {
    try {
      await navigator.share({
        title: shareData.title,
        text: shareData.text,
        url,
      });
    } catch (err) {
      // AbortError = user closed the share sheet — ignore gracefully.
      if (err instanceof Error && err.name === 'AbortError') return;
      // Any other error: fall through to WhatsApp fallback.
      console.warn('[handleShare] navigator.share failed, falling back:', err);
      openWhatsApp(shareData.text, url);
    }
    return;
  }

  // ── WhatsApp Web fallback (desktop / unsupported browsers) ─────────────
  openWhatsApp(shareData.text, url);
}

function openWhatsApp(text: string, url: string): void {
  const fullMessage = `${text}\n\n${url}`;
  const waUrl = `https://wa.me/?text=${encodeURIComponent(fullMessage)}`;
  window.open(waUrl, '_blank', 'noopener,noreferrer');
}
