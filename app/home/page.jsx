import SectionTitle from "@/components/common/SectionTitle/SectionTitle.component";
import TabbedContent from "@/components/common/TabbedContent/TabbedContent.component";
import DefaultLayout from "@/components/layout/DefaultLayout.component";
import NewsletterForm from "@/components/NewsletterForm/NewsletterForm.component";
import Reviews from "@/components/Reviews/Reviews.component";

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

const HomePage = () => {
  return (
    <DefaultLayout>
      HomePage
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
