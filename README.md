# Pratham Agarwal — portfolio

A dark, perception-themed portfolio: projects, videos with written versions, and "finds". Everything on the site comes from the files in [`content/`](content), so updating it never means touching the design code.

## Updating the site

### Easiest: the editor at `/admin`
Go to `https://prathamagarwalportfolio.vercel.app/admin/` and choose **Sign In Using Access Token**. Then use **Projects**, **Videos**, **Finds** or **Site settings**. Saving commits to this repo, and Vercel rebuilds the site in about a minute.

The editor is [Sveltia CMS](https://github.com/sveltia/sveltia-cms), configured in [`public/admin/config.yml`](public/admin/config.yml).

#### One-time: create the access token
1. On GitHub, open **Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token**.
2. Name it (for example "Portfolio editor") and pick an expiry date.
3. Under **Repository access**, choose **Only select repositories** and pick **Portfolio**.
4. Under **Permissions → Repository permissions**, set **Contents** to **Read and write**.
5. Generate it, copy it, and paste it into `/admin`. The editor remembers it in that browser.

When the token expires, make a new one the same way.

#### On your own computer
Run `npm run dev`, open http://localhost:5173/admin/ in Chrome or Edge, choose **Work with Local Repository**, and pick this folder. Changes are saved straight to the files here; commit and push them to put them online.

### By hand
Add or edit a Markdown file, either on your computer or on GitHub's website:

| What | Where |
|---|---|
| A project | `content/projects/<name>.md` |
| A video and its written version | `content/videos/<name>.md` |
| Something you found interesting | `content/finds/<name>.md` |
| A home page section (heading, order, custom entries) | `content/sections/<name>.md` |
| Name, headline, about, links | `content/site.yml` |
| Images and your CV | `public/media/` (use them as `/media/file.jpg`) |

Copy an existing file to see the fields. Anything with `draft: true` shows up while developing but never on the live site.

### Home page sections
Every heading on the home page is a file in `content/sections` (or **Home page sections** in `/admin`). Each one has a heading, an order number and a show/hide switch, so you can rename, reorder or hide any of them.

To add a new heading, create a section with type **custom** and pick a layout:
- **cards**: a grid of entries, each with an optional image, label, date, text and link
- **list**: one entry per row, good for experience, reading or talks
- **text**: just a piece of writing

The built-in types (`projects`, `videos`, `finds`, `about`, `contact`) show the matching content. A section with nothing in it (no videos yet, say) is skipped automatically.

### Videos add themselves
Put your channel ID (it starts with `UC`) in `youtubeChannelId` in `content/site.yml`. A daily GitHub Action ([`.github/workflows/youtube.yml`](.github/workflows/youtube.yml)) then adds new uploads to `content/videos`, and you write the written version whenever you like. Run it by hand with `npm run fetch-videos`.

## Running locally

```bash
npm install
```

```bash
npm run dev
```

## Hosting

The site is on Vercel, and every push to `main` deploys automatically. [`vercel.json`](vercel.json) sets the build (including fetching new videos) and sends page URLs like `/projects/worth-it` to the app.
