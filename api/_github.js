// Shared bits for the /admin GitHub login (Decap CMS's OAuth flow on Vercel).
// Needs GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET set in the Vercel project.

export const STATE_COOKIE = 'decap_oauth_state';

// The repo is public, so write access to public repos is enough.
export const SCOPE = 'public_repo,read:user';

export function siteOrigin(req) {
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const proto = req.headers['x-forwarded-proto'] || 'https';
  return `${proto}://${host}`;
}

export function readCookie(req, name) {
  const cookies = req.headers.cookie || '';
  const match = cookies.split(';').map((c) => c.trim()).find((c) => c.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.slice(name.length + 1)) : null;
}
