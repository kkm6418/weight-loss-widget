# Weight Tracker Widget

A single-file, dependency-free weight-loss tracker widget (dark theme, neon gold progress ring, pink accent icons) — matching the reference design. Pure HTML/CSS/JS, so it deploys instantly on Vercel with zero build config.

## Edit your numbers

Open `index.html` and find this block near the bottom (inside the `<script>` tag):

```js
const config = {
  startDate: "2026-07-01",   // the "Since" date
  startingWeight: 250.0,
  currentWeight: 220.0,
  goalWeight: 160.0,
};
```

Everything else — days elapsed, lbs lost, % progress, "to go" — is calculated automatically from those four numbers.

## Deploy: GitHub + Vercel

### 1. Push this folder to GitHub

```bash
cd weight-widget
git init
git add .
git commit -m "Initial commit: weight tracker widget"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

(Create the empty repo first at https://github.com/new — don't initialize it with a README so the push above doesn't conflict.)

### 2. Deploy on Vercel

**Option A — Vercel dashboard (no CLI needed)**
1. Go to https://vercel.com/new
2. Click **Import Git Repository** and select the repo you just pushed
3. Framework preset: choose **Other** (it's a static site, no build step)
4. Leave build/output settings blank and click **Deploy**

Vercel will detect `index.html` at the root and serve it directly. You'll get a live URL like `https://your-repo.vercel.app`.

**Option B — Vercel CLI**
```bash
npm i -g vercel
cd weight-widget
vercel        # follow prompts, deploys a preview
vercel --prod # promote to production URL
```

That's it — no build step, no dependencies, no framework required.
