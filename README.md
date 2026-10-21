# Pratham Agarwal — portfolio

A dark, perception-themed portfolio: projects, videos with written versions, and "finds". Everything on the site comes from the files in [`content/`](content), so updating it never means touching the design code.

## Updating the site

### Easiest: the editor at `/admin`
Go to `yoursite.com/admin`, log in with GitHub, and use **New project**, **New video**, **New find** or **Site settings**. Saving commits to this repo, and the host rebuilds the site in about a minute.

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

## Hosting on Netlify (one-time)

1. In Netlify, choose **Add new site → Import an existing project** and pick this repository. [`netlify.toml`](netlify.toml) already has the build settings.
2. So `/admin` can log you in with GitHub: in GitHub go to **Settings → Developer settings → OAuth Apps → New OAuth App**. Set the callback URL to `https://api.netlify.com/auth/done`.
3. In Netlify, open **Site configuration → Access & security → OAuth**, choose **Install provider → GitHub**, and paste the app's client ID and secret.
