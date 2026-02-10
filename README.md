# ClearCards

**Invitation cards made free — powered by trusted brands**

ClearCards is a platform that helps couples get physical wedding invitation cards at zero cost, while brands reach real homes through meaningful moments.

## Features

- 🎨 Premium quality invitation cards
- 💝 Completely free for couples
- 🤝 Respectful brand sponsorships
- ✨ Full design preview & approval
- 📦 Physical card printing & delivery

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel-ready

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Sign up at [resend.com](https://resend.com) and get your API key
   - Add your API key and contact email to `.env.local`:
   ```
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_EMAIL=your-email@example.com
   ```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles
├── components/
│   ├── Hero.tsx         # Hero section
│   ├── HowItWorks.tsx   # Process explanation
│   ├── ForCouples.tsx   # Couples section
│   ├── ForBrands.tsx    # Brands section
│   ├── SampleDesigns.tsx # Card design gallery
│   ├── Trust.tsx        # Trust indicators
│   ├── Contact.tsx      # Contact section with forms
│   ├── CouplesForm.tsx  # Couples submission form
│   ├── BrandsForm.tsx   # Brands submission form
│   └── Footer.tsx       # Footer
└── public/
    └── favicon.ico      # Site favicon
```

## Email Functionality

Both contact forms send emails using [Resend](https://resend.com):

- **Couples Form**: Sends to `/api/contact/couples`
- **Brands Form**: Sends to `/api/contact/brands` with reply-to functionality

**Free Tier**: 100 emails/day, 3,000/month

**Setup for Production**:
1. Add `RESEND_API_KEY` to your Vercel environment variables
2. Add `CONTACT_EMAIL` to specify where form submissions should be sent
3. Deploy and test!

## Deployment

Deploy to Vercel with one click:

```bash
npm run build
```

The site is production-ready and optimized for deployment on Vercel.

## Brand Guidelines

- **Colors**: Deep slate primary, warm gold accent
- **Tone**: Premium, transparent, respectful
- **Language**: Never mention pricing publicly
- **Focus**: Dignity and trust in Indian wedding context

---

Built with care for couples and brands 💌
