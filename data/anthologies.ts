// data/anthologies.ts

export interface Anthology {
  id: string;

  title: string;

  publisher: string;

  publication_type?: string;

  year?: string;

  description?: string;

  featured?: boolean;

  cover_url?: string;

  sort_order?: number;

  created_at?: string;

  updated_at?: string;
}

export const anthologies: Anthology[] = [
  {
    id: "1",

    title: "Soft Days",

    publisher: "Writer's Pocket",

    publication_type: "Poetry Anthology",

    year: "2023",

    description:
      "A poetry anthology by Writer's Pocket, celebrating softness, belonging, and the beauty of everyday moments.",

    featured: true,

    sort_order: 1,

    created_at: new Date().toISOString(),

    updated_at: new Date().toISOString(),
  },

  {
    id: "2",

    title: "Daisies",

    publisher: "Writer's Pocket",

    publication_type: "Poetry Anthology",

    year: "2023",

    description:
      "A poetry anthology by Writer's Pocket, inspired by nature's gentle reminders of hope, joy, and growth.",

    featured: true,

    sort_order: 2,

    created_at: new Date().toISOString(),

    updated_at: new Date().toISOString(),
  },

  {
    id: "3",

    title: "11:11 Wishes",

    publisher: "Writer's Pocket",

    publication_type: "Poetry Anthology",

    year: "2023",

    description:
      "A poetry anthology by Writer's Pocket, celebrating the dreams, wishes, and possibilities that light our way forward.",

    featured: true,

    sort_order: 3,

    created_at: new Date().toISOString(),

    updated_at: new Date().toISOString(),
  },
  {
    id: "4",

    title: "3 AM Notes",

    publisher: "Writer's Pocket",

    publication_type: "Poetry Anthology",

    year: "2024",

    description:
      "A poetry anthology by Writer's Pocket, weaving together late-night reflections, forgotten memories, and dreams too vivid for daylight.",

    featured: true,

    sort_order: 4,

    created_at: new Date().toISOString(),

    updated_at: new Date().toISOString(),
  },
  {
    id: "5",

    title: "Last Portrait (Vol. 2)",

    publisher: "The Bookholics X Paper Towns India",

    publication_type: "Poetry Anthology",

    year: "2025",

    description:
      "A poetry anthology by The Bookholics X Paper Towns India, reflecting on love, loss, and the moments that stay with us forever.",

    featured: true,

    sort_order: 5,

    created_at: new Date().toISOString(),

    updated_at: new Date().toISOString(),
  },
  {
    id: "6",

    title: "All That Wasn't Said",

    publisher: "The Bookholics X Paper Towns India",

    publication_type: "Poetry Anthology",

    year: "2026",

    description:
      "A poetry anthology by The Bookholics X Paper Towns India, capturing the weight of unsaid feelings and the stories hidden between the lines.",

    featured: true,

    sort_order: 6,

    created_at: new Date().toISOString(),

    updated_at: new Date().toISOString(),
  },
];
