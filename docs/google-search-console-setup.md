# Google Search Console Setup

Instructions for connecting your TablesAndCalc website to Google Search Console to monitor search performance and submit sitemaps.

## Step 1: Add Your Property

1.  Go to the [Google Search Console](https://search.google.com/search-console) website and sign in with your Google account.
2.  Click on "Add property" (usually in the top-left dropdown).
3.  Select the **Domain** property type (recommended).
4.  Enter your domain name exactly: `tablesandcalc.online`
5.  Click **Continue**.

## Step 2: Verify Domain Ownership

Google needs to confirm you own the domain. The **DNS record** method is generally preferred.

### Option A: DNS Verification (Recommended)

1.  Search Console will provide a **TXT record** (a string of text starting with `google-site-verification=...`). Copy this value.
2.  Log in to your domain name provider (where you bought `tablesandcalc.online`).
3.  Go to the DNS management section for your domain.
4.  Add a **new DNS record** with the following details:
    * **Type:** `TXT`
    * **Name/Host:** `@` (or leave blank if your provider requires, usually represents the root domain)
    * **Value/Content:** Paste the TXT record value you copied from Search Console.
    * **TTL:** Leave as default (usually 1 hour or 3600 seconds).
5.  Save the DNS record.
6.  Go back to Google Search Console and click **Verify**. Note: DNS changes can take some time (minutes to hours) to propagate, so you might need to wait before clicking Verify.

### Option B: HTML File Upload (Alternative)

1.  If DNS is difficult, choose the "HTML file upload" method in Search Console.
2.  Download the provided HTML verification file (e.g., `googleXXXXXXXXXXXXXXXX.html`).
3.  Place this downloaded file inside the `public/` folder of your Next.js project.
4.  **Deploy your website** with this file included.
5.  Once deployed, go back to Search Console and click **Verify**.

### Option C: HTML Tag (Alternative)

1.  Choose the "HTML tag" method in Search Console.
2.  Copy the provided `<meta>` tag.
3.  Open `src/app/layout.tsx` in your project.
4.  Paste the `<meta>` tag inside the `<head>` section.
5.  **Deploy your website** with this change.
6.  Go back to Search Console and click **Verify**.

## Step 3: Submit Your Sitemap

Once your domain is verified:

1.  In Google Search Console, navigate to **Sitemaps** (under the "Indexing" section in the sidebar).
2.  Under "Add a new sitemap", enter the full URL of your sitemap: `https://tablesandcalc.online/sitemap.xml`
3.  Click **Submit**.
4.  Google will start processing your sitemap. It might show "Couldn't fetch" initially; check back in a day or two. The status should eventually change to "Success".

## Step 4: Request Indexing (Optional but Recommended)

For your most important pages, you can ask Google to crawl them sooner:

1.  Go to the **URL Inspection** tool in Search Console.
2.  Enter the full URL of a key page (e.g., `https://tablesandcalc.online/`, `https://tablesandcalc.online/calculators/percentage-calculator`).
3.  Click **Request Indexing**. You can do this for a few key pages per day.

## Step 5: Monitor Performance

Regularly check Search Console (weekly is good practice) for:

* **Performance Report:** See which search queries bring users to your site, your click-through rate (CTR), and average position.
* **Indexing > Pages Report:** Check for any errors preventing pages from being indexed.
* **Experience > Core Web Vitals & Mobile Usability:** Ensure your site provides a good user experience.

---

That's it! Your site is now connected to Google Search Console.