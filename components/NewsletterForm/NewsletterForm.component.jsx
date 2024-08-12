import Image from "next/image";

const NewsletterForm = () => {
  return (
    <section className="bg-slate-50 py-12 bg-gray relative overflow-hidden z-10">
      <div className="absolute left-0 top-0 w-full h-full -z-10">
        <Image src="/images/dotted_bg.svg" alt="dots" fill />
      </div>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 xl:px-0">
        <div className="bg-white shadow-sm rounded-[10px] py-9 px-4 sm:px-8 xl:px-10">
          <div className="flex flex-wrap items-center justify-between gap-10">
            <div className="max-w-[455px] w-full">
              <h3 className="font-semibold text-xl text-gray-800 mb-3">
                Subscribe to Newsletter
              </h3>
              <p>
                Provide your email to get email notification when we launch new
                destinations, experiences and tours
              </p>
            </div>
            <div className="max-w-[494px] w-full">
              <form>
                <div className="flex items-center gap-5">
                  <div className="max-w-[350px] w-full">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter your Email"
                      className="rounded-md border border-gray-3 bg-white placeholder:text-dark-5 w-full py-3.5 px-5 outline-none focus:shadow-input focus:ring-2 focus:ring-dark-5 focus:border-transparent"
                    />
                  </div>
                  <button className="font-medium rounded-md text-white bg-gray-800 flex py-4 px-4 hover:opacity-80 transition-all ease-linear duration-300">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterForm;
