// Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// Define a `type` and `schema` for each collection
const experienceCollection = defineCollection({
  type: "data",
  schema: z.object({
    order: z.number(),
    shouldHide: z.boolean().optional(),
    company_name: z.string(),
    role_name: z.string(),
    website_url: z.string().optional(),
    time_worked: z.object({
      start: z.object({
        month: z.string(),
        year: z.number(),
      }),
      end: z
        .object({
          month: z.string(),
          year: z.number(),
        })
        .optional(),
    }),
    description: z.string().optional(),
    descriptive_points: z.array(z.string()).optional(),
    technologies: z.array(z.string()),
  }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  experience: experienceCollection,
};
