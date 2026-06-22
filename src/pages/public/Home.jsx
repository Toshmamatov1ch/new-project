import Hero from "../../components/Hero";
import Information from "../../components/Information";
import LastestPosts from "../../components/LastestPosts";

function Home() {
  return (
    <>
      <section className="w-full  bg-linear-to-r from-[#F1F1FE] to-[#F7F1FD] py-16 md:py-24">
        <Hero />
      </section>

      <section>
        <Information />
      </section>

      <section>
        <LastestPosts />
      </section>
    </>
  );
}

export default Home;
