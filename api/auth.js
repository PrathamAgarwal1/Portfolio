// Step 1 of the /admin login: send the editor to GitHub to approve access.
import { randomUUID } from 'node:crypto';
import { SCOPE, STATE_COOKIE, siteOrigin } from './_github.js';

export default function handler(req, res) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  if (!clientId) {
    res.status(500).send('GITHUB_CLIENT_ID is not set in this Vercel project.');
    return;
  }

  // A random value GitHub hands back, so the callback knows the login started here.
  const state = randomUUID();
  res.setHeader('Set-Cookie', `${STATE_COOKIE}=${state}; Path=/api; HttpOnly; Secure; SameSite=Lax; Max-Age=600`);

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: `${siteOrigin(req)}/api/callback`,
    scope: SCOPE,
    state,
  });
  res.redirect(302, `https://github.com/login/oauth/authorize?${params}`);
}
