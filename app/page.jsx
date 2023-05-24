import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex justify-center items-center flex-col">
      <h1 className="text-center flex flex-col font-extrabold my-2">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent text-center">
          AI Powered Search Engine
        </span>
      </h1>
      <p className="text-center">
        Find and share all the trendy prompts and redirects out there. Help the
        community grow with your support and exploration of the AI world.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
