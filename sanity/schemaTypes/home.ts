import { defineField, defineType } from 'sanity'

export const homeType = defineType({
  name: 'home',
  title: 'Home Page',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'services', title: 'Tailored Services Section' },
    { name: 'products', title: 'Products Section' },
    { name: 'letUsDoIt', title: 'Let Us Do It Section' },
    { name: 'qualityProducts', title: 'Quality Products Section' },
    { name: 'cta', title: 'Final CTA Section' },
  ],
  fields: [
    // === HERO SECTION ===
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      group: 'hero',
      description: 'The main headline displayed in the hero section',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      group: 'hero',
      description: 'The subtitle or tagline displayed below the headline',
    }),

    // === TAILORED SERVICES SECTION ===
    defineField({
      name: 'servicesTitle',
      title: 'Services Section Title',
      type: 'string',
      group: 'services',
    }),
    defineField({
      name: 'servicesDescription',
      title: 'Services Description',
      type: 'text',
      group: 'services',
    }),
    defineField({
      name: 'stat1Value',
      title: 'Stat 1 Value',
      type: 'string',
      group: 'services',
      description: 'e.g., "10"',
    }),
    defineField({
      name: 'stat1Label',
      title: 'Stat 1 Label',
      type: 'string',
      group: 'services',
      description: 'e.g., "days to study start"',
    }),
    defineField({
      name: 'stat2Value',
      title: 'Stat 2 Value',
      type: 'string',
      group: 'services',
      description: 'e.g., "95%"',
    }),
    defineField({
      name: 'stat2Label',
      title: 'Stat 2 Label',
      type: 'string',
      group: 'services',
    }),
    defineField({
      name: 'stat3Value',
      title: 'Stat 3 Value',
      type: 'string',
      group: 'services',
      description: 'e.g., "500+"',
    }),
    defineField({
      name: 'stat3Label',
      title: 'Stat 3 Label',
      type: 'string',
      group: 'services',
    }),

    // === PRODUCTS SECTION ===
    defineField({
      name: 'productsTitle',
      title: 'Products Section Title',
      type: 'string',
      group: 'products',
    }),
    defineField({
      name: 'productsDescription',
      title: 'Products Description',
      type: 'text',
      group: 'products',
    }),
    defineField({
      name: 'productFeatures',
      title: 'Product Features',
      type: 'array',
      group: 'products',
      of: [{ type: 'string' }],
      description: 'List of product features (bullet points)',
    }),

    // === LET US DO IT SECTION ===
    defineField({
      name: 'letUsDoItTitle',
      title: 'Section Title',
      type: 'string',
      group: 'letUsDoIt',
    }),
    defineField({
      name: 'card1Title',
      title: 'Card 1 Title',
      type: 'string',
      group: 'letUsDoIt',
    }),
    defineField({
      name: 'card1Description',
      title: 'Card 1 Description',
      type: 'text',
      group: 'letUsDoIt',
    }),
    defineField({
      name: 'card2Title',
      title: 'Card 2 Title',
      type: 'string',
      group: 'letUsDoIt',
    }),
    defineField({
      name: 'card2Description',
      title: 'Card 2 Description',
      type: 'text',
      group: 'letUsDoIt',
    }),

    // === QUALITY PRODUCTS SECTION ===
    defineField({
      name: 'qualityProductsTitle',
      title: 'Quality Products Title',
      type: 'string',
      group: 'qualityProducts',
    }),

    // === FINAL CTA SECTION ===
    defineField({
      name: 'ctaTagline',
      title: 'CTA Tagline',
      type: 'string',
      group: 'cta',
      description: 'Small text above the CTA title (e.g., "Specialized Development")',
    }),
    defineField({
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
      group: 'cta',
    }),
    defineField({
      name: 'ctaDescription',
      title: 'CTA Description',
      type: 'text',
      group: 'cta',
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      type: 'string',
      group: 'cta',
    }),
  ],
  preview: {
    select: {
      title: 'heroHeadline',
    },
    prepare({ title }) {
      return {
        title: title || 'Home Page',
      }
    },
  },
})
