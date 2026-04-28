export type ProjectMedia =
  | { type: "image"; src: string }
  | { type: "lottie"; data: unknown };
export const projectImages = {
  LOCUSKOREA: [
    { type: "lottie", data: "lottie" },
    { type: "image", src: "/images/projects/locuskorea/locuskorea-1.png" },

    { type: "image", src: "/images/projects/locuskorea/locuskorea-2.png" },

    { type: "image", src: "/images/projects/locuskorea/locuskorea-3.png" },

    { type: "image", src: "/images/projects/locuskorea/locuskorea-4.png" },
  ],

  TRENSHOW: [
    { type: "image", src: "/images/projects/trenshow/trenshow-1.png" },
    { type: "image", src: "/images/projects/trenshow/trenshow-2.png" },
    { type: "image", src: "/images/projects/trenshow/trenshow-3.png" },
    { type: "image", src: "/images/projects/trenshow/trenshow-4.png" },
    { type: "image", src: "/images/projects/trenshow/trenshow-5.png" },
    { type: "image", src: "/images/projects/trenshow/trenshow-6.png" },
    { type: "image", src: "/images/projects/trenshow/trenshow-7.png" },
    { type: "image", src: "/images/projects/trenshow/trenshow-8.png" },
  ],

  "261HOUSE": [
    { type: "image", src: "/images/projects/261house/faav-1.png" },
    { type: "image", src: "/images/projects/261house/faav-2.png" },
    { type: "image", src: "/images/projects/261house/faav-3.png" },
    { type: "image", src: "/images/projects/261house/faav-4.png" },
    { type: "image", src: "/images/projects/261house/faav-5.png" },
    { type: "image", src: "/images/projects/261house/faav-6.png" },
    { type: "image", src: "/images/projects/261house/faav-7.png" },
    { type: "image", src: "/images/projects/261house/faav-8.png" },
  ],
  "SOJUTRIP (외주)": [
    { type: "image", src: "/images/projects/sojutrip/sojutrip-1.png" },
    { type: "image", src: "/images/projects/sojutrip/sojutrip-2.png" },
    { type: "image", src: "/images/projects/sojutrip/sojutrip-3.png" },
    { type: "image", src: "/images/projects/sojutrip/sojutrip-4.png" },
    { type: "image", src: "/images/projects/sojutrip/sojutrip-5.png" },
    { type: "image", src: "/images/projects/sojutrip/sojutrip-6.png" },
  ],
  "아누에듀 AnuEdu (외주)": [
    { type: "image", src: "/images/projects/anuedu/anuedu-1.png" },
    { type: "image", src: "/images/projects/anuedu/anuedu-2.png" },
    { type: "image", src: "/images/projects/anuedu/anuedu-3.png" },
    { type: "image", src: "/images/projects/anuedu/anuedu-4.png" },
    { type: "image", src: "/images/projects/anuedu/anuedu-5.png" },
    { type: "image", src: "/images/projects/anuedu/anuedu-6.png" },
    { type: "image", src: "/images/projects/anuedu/anuedu-7.png" },
    { type: "image", src: "/images/projects/anuedu/anuedu-8.png" },
  ],
} as const;
