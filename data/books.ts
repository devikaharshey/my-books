export interface Book {
  id: string;

  title: string;

  subtitle?: string;

  description?: string;

  cover_url?: string;

  classification?: string;

  anthology_id?: string;

  purchase_links?: {
    amazon?: string;
    flipkart?: string;
    notionpress?: string;
    writerspocket?: string;
    other?: string;
  };

  featured_quote?: string;

  release_date?: string;

  spine_color?: string;

  sort_order?: number;

  is_featured?: boolean;

  created_at?: string;

  updated_at?: string;

  genres?: string[];

  emotional_tags?: string[];
}

export const books: Book[] = [
  {
    id: "1",

    title: "The Unhappy Girl",

    description:
      "This book is based on a girl who is usually very unhappy at certain stages of life...but still find happiness!",

    cover_url: "/the-unhappy-girl.jpg",

    classification: "Novel",

    purchase_links: {
      amazon: "https://www.amazon.in/Unhappy-Girl-DEVIKA-HARSHEY/dp/1645469654/",
      flipkart: "https://www.flipkart.com/the-unhappy-girl/p/itmffrb4nzznetdn",
      notionpress: "https://notionpress.com/in/read/the-unhappy-girl",
    },

    release_date: "2019-04-20",

    spine_color: "#f52276",

    sort_order: 1,

    is_featured: true,

    genres: ["Fiction", "Family & Relationships"],

    created_at: new Date().toISOString(),

    updated_at: new Date().toISOString(),
  },
  {
    id: "2",

    title: "Meree Pyari Diary",

    description:
      "This book is based on my experiences — my invaluable experiences. I have faced many situations, some of which taught me how to move forward, while others left me saddened. It contains poems, short stories, and thoughts. I hope you will enjoy reading it.",

    cover_url: "/meree-pyari-diary.jpg",

    classification: "Non-fiction",

    purchase_links: {
      amazon: "https://www.amazon.in/dp/1646500342/",
      flipkart: "https://www.flipkart.com/meree-pyari-diary/p/itm50c842eca1eef",
      notionpress: "https://notionpress.com/in/read/meree-pyari-diary",
    },

    release_date: "2019-07-17",

    spine_color: "#fae1f7",

    sort_order: 2,

    is_featured: true,

    genres: ["Non-fiction", "Letters & Essays"],

    created_at: new Date().toISOString(),

    updated_at: new Date().toISOString(),
  },
  {
    id: "3",

    title: "My Sweet Friendhood",

    description:
      "This book is based on friendship. It shows how people behave to sustain their friendships and how important friendship is in one’s life.",

    cover_url: "/my-sweet-friendhood.jpg",

    classification: "Non-fiction",

    purchase_links: {
      amazon: "https://www.amazon.in/My-Sweet-Friendhood-Devika-Harshey/dp/1646618238/",
      flipkart: "https://www.flipkart.com/my-sweet-friendhood/p/itmf654ea0c836ef",
      notionpress: "https://notionpress.com/in/read/my-sweet-friendhood",
    },

    release_date: "2019-09-06",

    spine_color: "#bd0664",

    sort_order: 3,

    is_featured: true,

    genres: ["Non-fiction", "Family & Relationships"],

    created_at: new Date().toISOString(),

    updated_at: new Date().toISOString(),
  },
  {
    id: "4",

    title: "Amitabh Bachchan : The Legendary",

    description:
      "This book is based on life of a very famous personality, he is none another than our Amitabh Bachchan He is very great personality. Almost every person wants to meet atleast one time to him. He is amazing. So here is a book which has many interesting facts related to his life.",

    cover_url: "/amitabh-bachchan.jpg",

    classification: "Biography",

    purchase_links: {
      amazon: "https://www.amazon.in/Amitabh-Bachchan-Legendary-Devika-Harshey/dp/1648695620/",
      flipkart: "https://www.flipkart.com/amitabh-bachchan/p/itm092a6f7168e46",
      notionpress: "https://notionpress.com/in/read/amitabh-bachchan-the-legendary",
    },

    release_date: "2020-03-31",

    spine_color: "#fcfafb",

    sort_order: 4,

    is_featured: true,

    genres: ["Biography", "Letters & Essays"],

    created_at: new Date().toISOString(),

    updated_at: new Date().toISOString(),
  },
  {
    id: "5",

    title: "5 PROBLEMS EVERY SIBLINGS HAVE",

    description:
      "We all know that life of siblings is not so easy. There are many problems because of which they always fight. The only way to avoid this is to act wisely. So, in this book I've shared the 5 most common  problems faced by every siblings and I've also shared my experience on that.",

    cover_url: "/5-problems-every-siblings-have.jpg",

    classification: "Non-fiction",

    purchase_links: {
      amazon: "https://www.amazon.in/5-PROBLEMS-EVERY-SIBLINGS-HAVE/dp/1648994210/",
      flipkart: "https://www.flipkart.com/5-problems-every-siblings-have/p/itm7b74c9b6d3f54",
      notionpress: "https://notionpress.com/in/read/5-problems-every-siblings-have",
    },

    release_date: "2020-05-23",

    spine_color: "#24cef0",

    sort_order: 5,

    is_featured: true,

    genres: ["Non-fiction", "Family & Relationships"],

    created_at: new Date().toISOString(),

    updated_at: new Date().toISOString(),
  },
  {
    id: "6",

    title: "Threads Of Reverie",

    description:
      "Threads of Reverie is a heartfelt collection of poems about love, hope, memories, and life’s simple moments. Through gentle and uplifting verses, it celebrates the beauty of everyday experiences and emotions.",

    cover_url: "/threads-of-reverie.jpg",

    classification: "Poetry",

    purchase_links: {
      amazon: "https://www.amazon.in/Poetry-Threads-Reverie-Devika-Harshey/dp/9360830879/",
      flipkart: "https://www.flipkart.com/threads-of-reverie/p/itm57715023dd45d",
      writerspocket: "https://writerspocket.com/shop/b96ba08d-1902-4a8b-85c5-8ef08ed52328",
    },

    release_date: "2024-07-21",

    spine_color: "#ddd6ff",

    sort_order: 6,

    is_featured: true,

    genres: ["Poetry", "Family & Relationships"],

    created_at: new Date().toISOString(),

    updated_at: new Date().toISOString(),
  },
];
