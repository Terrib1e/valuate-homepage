import { Metadata } from "next"

interface SeoProps {
  title: string
  description: string
  canonical?: string
  openGraph?: {
    title?: string
    description?: string
    url?: string
    siteName?: string
    images?: Array<{
      url: string
      width?: number
      height?: number
      alt?: string
    }>
    locale?: string
    type?: "article" | "profile" | "website" | "book" | "music.song" | "music.album" | "music.playlist" | "music.radio_station" | "video.movie" | "video.episode" | "video.tv_show" | "video.other"
  }
  twitter?: {
    card?: "summary" | "summary_large_image" | "app" | "player"
    site?: string
    creator?: string
    title?: string
    description?: string
    image?: string
  }
}

export function generateMetadata({
  title,
  description,
  canonical,
  openGraph,
  twitter,
}: SeoProps): Metadata {
  return {
    title,
    description,
    metadataBase: new URL("https://valuate.com"),
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      title: openGraph?.title || title,
      description: openGraph?.description || description,
      url: openGraph?.url,
      siteName: openGraph?.siteName || "Valuate",
      images: openGraph?.images,
      locale: openGraph?.locale || "en_US",
      type: openGraph?.type || "website",
    },
    twitter: {
      card: twitter?.card || "summary_large_image",
      site: twitter?.site || "@valuate",
      creator: twitter?.creator || "@valuate",
      title: twitter?.title || title,
      description: twitter?.description || description,
      images: twitter?.image ? [twitter.image] : undefined,
    },
  }
}