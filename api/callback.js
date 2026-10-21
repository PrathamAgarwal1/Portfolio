// Step 2 of the /admin login: GitHub sends the editor back here with a code. We
// swap it for an access token and hand that to the /admin window, which only
// accepts it from this site's own origin.
import { STATE_COOKIE, readCookie, siteOrigin } from './_github.js';

function reply(res, origin, status, content) {
  const message = `authorization:github:${status}:${JSON.stringify(content)}`;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Set-Cookie', `${STATE_COOKIE}=; Path=/api; HttpOnly; Secure; SameSite=Lax; Max-Age=0`);
  res.status(200).send(`<!doctype html><html><body><script>
(function () {
  var origin = ${JSON.stringify(origin)};
  var message = ${JSON.stringify(message)};
  function receive(e) {
    if (e.origin !== origin) return;
    window.opener.postMessage(message, origin);
    window.removeEventListener('message', receive);
    setTimeout(function () { window.close(); }, 300);
  }
  window.addEventListener('message', receive);
  window.opener.postMessage('authorizing:github', origin);
})();
</script></body></html>`);
}

export default async function handler(req, res) {
  const origin = siteOrigin(req);
  const { code, state } = req.query;

  if (!code || !state || state !== readCookie(req, STATE_COOKIE)) {
    reply(res, origin, 'error', { message: 'Login could not be verified. Close this window and try again.' });
    return;
  }

  try {
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
        redirect_uri: `${origin}/api/callback`,
      }),
    });
    const data = await response.json();
    if (!data.access_token) throw new Error(data.error_description || data.error || 'No token returned');
    reply(res, origin, 'success', { token: data.access_token, provider: 'github' });
  } catch (err) {
    reply(res, origin, 'error', { message: err.message });
  }
}
