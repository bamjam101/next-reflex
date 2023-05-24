import Link from "next/link";
const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex flex-col justify-start">
      <h1 className="text-left mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl">
        <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          {type} Post
        </span>
      </h1>
      <p className="text-left mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl">
        {type} and share amazing prompts with the world and let your imagination
        run will with any AI-powered platform.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 rounded-xl border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-5"
      >
        <label htmlFor="">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your prompt here..."
            required
            className="w-full flex rounded-lg h-[200px] mt-2 p-3 text-sm text-gray-500 outline-0"
          ></textarea>
        </label>
        <label htmlFor="">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag{" "}
            <span className="font-normal">
              #product, #webdevelopment, #idea
            </span>
          </span>

          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            required
            className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
          ></input>
        </label>
        <div className="justify-end flex items-center mx-3 mb-5 gap-4">
          <Link href={"/"} className="text-gray-500 text-sm">
            Cancle
          </Link>
          <button
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
            type="submit"
            disabled={submitting}
          >
            {submitting ? `${type}` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
