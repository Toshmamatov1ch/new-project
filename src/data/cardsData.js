import techImage1 from "../assets/images/tech-future.png";
import productivityImage1 from "../assets/images/mastering-productivity.png";
import designImage1 from "../assets/images/design-principles.png";
import techImage2 from "../assets/images/scalable-apps.png";
import productivityImage2 from "../assets/images/remote-work.png";
import designImage2 from "../assets/images/color-theory.png";

// Kunlarni ayirish orqali real sana chiqarish funksiyasi
const getPastDate = (daysAgo) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);

  // Formatlash: "Nov 20, 2025" ko'rinishida chiqarish uchun
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const cardsData = [
  {
    id: 1,
    category: "Technology",
    image: techImage1,
    date: getPastDate(0), // Bugungi sana real ko'rinadi
    title: "The Future of Web Development",
    desc: "Exploring the latest trends and technologies shaping the future of web development.",
    link: "/",
    status: false,
  },
  {
    id: 2,
    category: "Productivity",
    image: productivityImage1,
    date: getPastDate(2), // 2 kun oldingi sana
    title: "Mastering Productivity",
    desc: "Proven strategies and tools to boost your productivity and achieve your goals faster.",
    link: "#",
    status: false,
  },
  {
    id: 3,
    category: "Design",
    image: designImage1,
    date: getPastDate(5), // 5 kun oldingi sana
    title: "Design Principles That Matter",
    desc: "Essential design principles every creator should know to build stunning user experiences.",
    link: "#",
    status: false,
  },
  {
    id: 4,
    category: "Technology",
    image: techImage2,
    date: getPastDate(8),
    title: "Building Scalable Applications",
    desc: "Learn how to architect and build applications that can scale to millions of users.",
    link: "#",
    status: false,
  },
  {
    id: 5,
    category: "Productivity",
    image: productivityImage2,
    date: getPastDate(10),
    title: "The Art of Remote Work",
    desc: "Tips and best practices for thriving in a remote work environment.",
    link: "#",
    status: false,
  },
  {
    id: 6,
    category: "Design",
    image: designImage2,
    date: getPastDate(12),
    title: "Color Theory in Digital Design",
    desc: "Understanding how color affects user perception and behavior in digital products.",
    link: "#",
    status: false,
  },
];
