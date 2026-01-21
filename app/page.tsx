import { client, previewClient } from '@/sanity/lib/client'
import { draftMode } from 'next/headers'
import HomeClient from './HomeClient'

// Define the shape of our home page data
export interface HomeData {
  // Hero
  heroHeadline: string | null
  heroSubtitle: string | null
  // Services
  servicesTitle: string | null
  servicesDescription: string | null
  stat1Value: string | null
  stat1Label: string | null
  stat2Value: string | null
  stat2Label: string | null
  stat3Value: string | null
  stat3Label: string | null
  // Products
  productsTitle: string | null
  productsDescription: string | null
  productFeatures: string[] | null
  // Let Us Do It
  letUsDoItTitle: string | null
  card1Title: string | null
  card1Description: string | null
  card2Title: string | null
  card2Description: string | null
  // Quality Products
  qualityProductsTitle: string | null
  // CTA
  ctaTagline: string | null
  ctaTitle: string | null
  ctaDescription: string | null
  ctaButtonText: string | null
}

// Default fallback values
const DEFAULTS: HomeData = {
  heroHeadline: 'Fit-for-purpose assay development, customization and execution.',
  heroSubtitle: '',
  servicesTitle: 'Tailored Services that Meet Your Needs',
  servicesDescription: 'At PBL our 3 decades of assay development experience mean we deeply understand the technical challenges you face. Our Bioanalytical Services solutions combine subject matter expertise with high performance standards, short timelines and cost-effective pricing.',
  stat1Value: '10',
  stat1Label: 'days to study start',
  stat2Value: '95%',
  stat2Label: 'client retention rate',
  stat3Value: '500+',
  stat3Label: 'projects completed',
  productsTitle: "Products that Won't Let You Down",
  productsDescription: 'PBL products are developed with real-world biology in mind. We support you with assays and reagents, i.e., proteins and antibodies, that are high quality, consistent and reliable, three reasons why our products are frequently cited and validated. Need help? We also provide detailed technical information and product support, from our scientists to yours.',
  productFeatures: ['Optimized for Variability', 'High Sensitivity', 'Accurate Quantification', 'Full-spec Assay Range and LLOQ'],
  letUsDoItTitle: 'Let Us Do It For You',
  card1Title: 'Bioanalytical Testing',
  card1Description: 'At PBL we expedite your R&D work by adhering to fit-for-purpose guidelines and generating only the data you need. Our team is an extension of yours. Our assays are validated under ICH M10 guidelines and support discovery, pre-clinical studies, and exploratory clinical trial endpoints.',
  card2Title: 'Assay Development',
  card2Description: 'PBL develops assays for research use or to a standard that will support GLP validation - the choice is yours. We support cell-based assay development, immunoassay development and assay optimization. Wherever you are in the research journey, our team is here to work alongside you.',
  qualityProductsTitle: "Quality Products You Won't Find Anywhere Else",
  ctaTagline: '',
  ctaTitle: 'Speak to a Scientist',
  ctaDescription: 'PBL\'s Customer Support Team is ready to assist by email, phone, or chat.',
  ctaButtonText: 'Speak to a Scientist',
}

async function getHomeData(isDraftMode: boolean): Promise<HomeData> {
  const sanityClient = isDraftMode ? previewClient : client
  
  try {
    const data = await sanityClient.fetch<HomeData | null>(
      `*[_type == "home"][0]{
        heroHeadline,
        heroSubtitle,
        servicesTitle,
        servicesDescription,
        stat1Value,
        stat1Label,
        stat2Value,
        stat2Label,
        stat3Value,
        stat3Label,
        productsTitle,
        productsDescription,
        productFeatures,
        letUsDoItTitle,
        card1Title,
        card1Description,
        card2Title,
        card2Description,
        qualityProductsTitle,
        ctaTagline,
        ctaTitle,
        ctaDescription,
        ctaButtonText
      }`,
      {},
      isDraftMode 
        ? { perspective: 'drafts' } 
        : { next: { revalidate: 60 } }
    )
    
    // Merge with defaults for any missing fields
    return {
      heroHeadline: data?.heroHeadline || DEFAULTS.heroHeadline,
      heroSubtitle: data?.heroSubtitle || DEFAULTS.heroSubtitle,
      servicesTitle: data?.servicesTitle || DEFAULTS.servicesTitle,
      servicesDescription: data?.servicesDescription || DEFAULTS.servicesDescription,
      stat1Value: data?.stat1Value || DEFAULTS.stat1Value,
      stat1Label: data?.stat1Label || DEFAULTS.stat1Label,
      stat2Value: data?.stat2Value || DEFAULTS.stat2Value,
      stat2Label: data?.stat2Label || DEFAULTS.stat2Label,
      stat3Value: data?.stat3Value || DEFAULTS.stat3Value,
      stat3Label: data?.stat3Label || DEFAULTS.stat3Label,
      productsTitle: data?.productsTitle || DEFAULTS.productsTitle,
      productsDescription: data?.productsDescription || DEFAULTS.productsDescription,
      productFeatures: data?.productFeatures || DEFAULTS.productFeatures,
      letUsDoItTitle: data?.letUsDoItTitle || DEFAULTS.letUsDoItTitle,
      card1Title: data?.card1Title || DEFAULTS.card1Title,
      card1Description: data?.card1Description || DEFAULTS.card1Description,
      card2Title: data?.card2Title || DEFAULTS.card2Title,
      card2Description: data?.card2Description || DEFAULTS.card2Description,
      qualityProductsTitle: data?.qualityProductsTitle || DEFAULTS.qualityProductsTitle,
      ctaTagline: data?.ctaTagline || DEFAULTS.ctaTagline,
      ctaTitle: data?.ctaTitle || DEFAULTS.ctaTitle,
      ctaDescription: data?.ctaDescription || DEFAULTS.ctaDescription,
      ctaButtonText: data?.ctaButtonText || DEFAULTS.ctaButtonText,
    }
  } catch (error) {
    console.error('Error fetching home data from Sanity:', error)
    return DEFAULTS
  }
}

export default async function Home() {
  const isDraftMode = (await draftMode()).isEnabled
  const homeData = await getHomeData(isDraftMode)

  return <HomeClient data={homeData} />
}
