import Image from "next/image";
import FeaturedGrid from "@/components/common/FeaturedGrid/FeaturedGrid.component";
import SectionTitle from "@/components/common/SectionTitle/SectionTitle.component";
import TabbedContent from "@/components/common/TabbedContent/TabbedContent.component";
import DefaultLayout from "@/components/layout/DefaultLayout.component";
import NewsletterForm from "@/components/NewsletterForm/NewsletterForm.component";
import Reviews from "@/components/Reviews/Reviews.component";
// import Slider from "@/components/common/Slider/Slider.component";

const categories = [
  {
    id: 0,
    label: "Accommodations",
    items: [
      {
        name: "Jetwing Colombo Seven",
        description:
          "A luxury hotel located in the heart of Colombo with a rooftop infinity pool.",
        image: "/images/accommodations/jetwing-colombo-7.jpg",
      },
      {
        name: "The Kingsbury Colombo",
        description:
          "A premier luxury hotel offering stunning views of the Indian Ocean.",
        image: "/images/accommodations/the-kingsbury-colombo.jpg",
      },
      {
        name: "Galle Face Hotel",
        description:
          "A historic luxury hotel located on the oceanfront of Colombo.",
        image: "/images/accommodations/galle-face-hotel.jpg",
      },
      {
        name: "Heritance Kandalama",
        description:
          "A unique eco-hotel nestled in the heart of the Cultural Triangle.",
        image: "/images/accommodations/heritance-kandalama.jpg",
      },
      {
        name: "Cinnamon Lodge Habarana",
        description:
          "A luxury resort situated in the heart of Sri Lanka's Cultural Triangle.",
        image: "/images/accommodations/cinnamon-lodge-habarana.jpg",
      },
    ],
    moreLink: {
      label: "Browse all Accommodations",
      href: "/accommodations",
    },
  },
  {
    id: 1,
    label: "Activities",
    items: [
      {
        name: "Jetwing Colombo Seven",
        description:
          "A luxury hotel located in the heart of Colombo with a rooftop infinity pool.",
        image: "/images/accommodations/jetwing-colombo-7.jpg",
      },
    ],
    moreLink: {
      label: "Browse all Activities",
      href: "/activities",
    },
  },
  {
    id: 1,
    label: "Attractions",
    items: [
      {
        name: "Jetwing Colombo Seven",
        description:
          "A luxury hotel located in the heart of Colombo with a rooftop infinity pool.",
        image: "/images/accommodations/jetwing-colombo-7.jpg",
      },
    ],
    moreLink: {
      label: "Browse all Attractions",
      href: "/attractions",
    },
  },
];

const featured = [
  {
    name: "Exploring the Ancient Temples and Historical Sites of Sri Lanka",
    category: "Cultural",
    description:
      "A comprehensive tour covering Sri Lanka's rich cultural heritage, including visits to Sigiriya Rock Fortress, the ancient city of Polonnaruwa, and the sacred city of Kandy.",
    image: "/images/tours/ancient-temples-historical-sites-sri-lanka.jpg",
  },
  {
    name: "Thrilling Jungle Safaris and Mountain Adventures in Sri Lanka",
    category: "Adventure",
    description:
      "An exhilarating adventure tour featuring jeep safaris in Yala National Park, trekking in the Knuckles Mountain Range, and exploring the scenic beauty of Ella.",
    image: "/images/tours/jungle-safaris-mountain-adventures-sri-lanka.jpg",
  },
  {
    name: "Relaxing Beach Escapes and Coastal Wonders of Sri Lanka",
    category: "Beach",
    description:
      "A relaxing tour focusing on Sri Lanka's stunning coastline, with visits to the beautiful beaches of Mirissa, Galle Fort, and the laid-back charm of Unawatuna.",
    image: "/images/tours/beach-escapes-coastal-wonders-sri-lanka.jpg",
  },
];

const HomePage = () => {
  return (
    <DefaultLayout>
      {/* <Slider /> */}
      <section id="home" class="relative overflow-hidden z-10 pb-20 pt-20">
        <div>
          <div class="absolute bottom-0 left-0 w-full h-full bg-white"></div>
          <div
            class="hidden lg:block absolute bottom-0 left-0  w-full h-full"
            style={{ left: "-20%", top: "-20%" }}
          >
            <Image
              className="w-full h-full object-colver"
              src={featured[0]?.image}
              alt=""
              width={1024}
              height={768}
              style={{ filter: "blur(100px)" }}
            />
          </div>
        </div>

        <FeaturedGrid featured={featured} />
      </section>
      <section className="pt-20  pb-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 xl:px-0">
          <SectionTitle
            title="Browse by Category"
            description="Select a category to see all places in that category."
            align="center"
          />

          <div>
            <div className="flex flex-wrap justify-center gap-4 items-center mb-15">
              <TabbedContent tabData={categories} />
            </div>
          </div>
        </div>
      </section>
      <Reviews />
      <NewsletterForm />
    </DefaultLayout>
  );
};

export default HomePage;
