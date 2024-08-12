import DefaultLayout from "@/components/layout/DefaultLayout.component";
import NewsletterForm from "@/components/NewsletterForm/NewsletterForm.component";
import Reviews from "@/components/Reviews/Reviews.component";
const HomePage = () => {
  return (
    <DefaultLayout>
      HomePage
      <Reviews />
      <NewsletterForm />
    </DefaultLayout>
  );
};

export default HomePage;
