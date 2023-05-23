import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex justify-center items-center flex-col">
      <h1 className="text-center font-extrabold my-2">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent text-center">
          AI Powered Search Engine
        </span>
      </h1>
      <p className="text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
        temporibus harum in repellendus totam aliquid eum. Assumenda cupiditate
        accusamus dolorum porro recusandae distinctio nihil eveniet deserunt
        aut! Quisquam, natus dolorem.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
