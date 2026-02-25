import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://blog.saneesh.shop";
    const currentDate = new Date();

    return [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: "daily",
            priority: 1,
        },
        {
            url: `${baseUrl}/create`,
            lastModified: currentDate,
            changeFrequency: "weekly",
            priority: 0.8,
        },
    ];
}
