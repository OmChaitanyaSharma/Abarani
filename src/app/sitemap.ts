import { MetadataRoute } from "next";
import { getAllSchools } from "@/config/schools";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://abarani.in";
  const schools = getAllSchools();

  const schoolUrls: MetadataRoute.Sitemap = schools.map((school) => ({
    url: `${baseUrl}/schools/${school.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/schools`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/accessories`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/daily-ethnic`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  return [...staticUrls, ...schoolUrls];
}
