# Pratham Agarwal — portfolio

A dark, perception-themed portfolio: projects, videos with written versions, and "finds". Everything on the site comes from the files in [`content/`](content), so updating it never means touching the design code.

## Updating the site

### Easiest: the editor at `/admin`
Go to `yoursite.com/admin`, log in with GitHub, and use **New project**, **New video**, **New find** or **Site settings**. Saving commits to this repo, and Vercel rebuilds the site in about a minute.

To use the editor on your own computer, without logging in:

```bash
npm run dev
```

```bash
npm run cms
```

Then open http://localhost:5173/admin/.

### By hand
Add or edit a Markdown file:

| What | Where |
|---|---|
| A project | `content/projects/<name>.md` |
| A video and its written version | `content/videos/<name>.md` |
| Something you found interesting | `content/finds/<name>.md` |
| Name, headline, about, links, section order | `content/site.yml` |
| Images and your CV | `public/media/` (use them as `/media/file.jpg`) |

Copy an existing file to see the fields. Anything with `draft: true` shows up while developing but never on the live site.

### Sections are widgets
`sections` in `content/site.yml` sets which sections appear on the home page and in what order. A section with nothing in it (no videos yet, say) is skipped automatically.

### Videos add themselves
Put your channel ID (it starts with `UC`) in `youtubeChannelId` in `content/site.yml`. A daily GitHub Action ([`.github/workflows/youtube.yml`](.github/workflows/youtube.yml)) then adds new uploads to `content/videos`, and you write the written version whenever you like. Run it by hand with `npm run fetch-videos`.

## Running locally

```bash
npm install
```

```bash
npm run dev
```

## Hosting on Vercel

Every push to `main` deploys automatically. [`vercel.json`](vercel.json) sets the build (including fetching new videos) and sends page URLs like `/projects/worth-it` to the app.

### One-time: let `/admin` log you in with GitHub
The login runs through two small functions in [`api/`](api).

1. In GitHub, go to **Settings → Developer settings → OAuth Apps → New OAuth App**.
   - **Homepage URL:** your site's address, for example `https://your-site.vercel.app`
   - **Authorization callback URL:** the same address followed by `/api/callback`
2. Create the app, then generate a **client secret**.
3. In Vercel, open the project's **Settings → Environment Variables** and add:
   - `GITHUB_CLIENT_ID`: the app's client ID
   - `GITHUB_CLIENT_SECRET`: the client secret
4. Redeploy, then open `/admin` on your site and choose **Login with GitHub**.

If you move to a custom domain, update the two URLs in the GitHub OAuth app to match.
