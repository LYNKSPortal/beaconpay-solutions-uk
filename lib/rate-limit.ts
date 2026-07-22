/**
 * Simple in-memory rate limiter for form API routes.
 * This is a basic implementation suitable for low-volume sites.
 * For production scale, use Redis or a similar shared store.
 */

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const store = new Map<string, RateLimitEntry>();
const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 10;

export function isRateLimited(key: string): { limited: boolean; retryAfter?: number } {
  const now = Date.now();
  const entry = store.get(key);

  if (!entry || now > entry.resetAt) {
    store.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { limited: false };
  }

  if (entry.count >= MAX_REQUESTS) {
    return { limited: true, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
  }

  entry.count += 1;
  return { limited: false };
}
