import hifi from "./assets/images/Hifi.png";
import spotify from "./assets/images/Spotify_logo_with_text.png";
import applePodcast from "./assets/images/Apple_Podcast.png";
import googlePodcast from "./assets/images/google_podcast.png";
import pocketCast from "./assets/images/pocket_cast.png";

const App = () => {
  return (
    <>
      <main>
        <section className="flex flex-col min-h-screen justify-center items-center p-4 space-y-8">

          <div className="logo flex justify-center items-center space-x-2 my-8 ">
            <img src={hifi} />
            <p className="text-[35px] font-bold text-light-blueish-gray">pod</p>
          </div>
          <div className="content flex flex-col">
            <div className="text-center">
              <h1 className="text-[26px] uppercase text-light-green mb-8">
                Publish your podcasts{" "}
                <span className="text-light-blueish-gray">everywhere.</span>
              </h1>
              <p className="text-light-blueish-gray">
                Upload your audio to Pad with a single click. We'll then
                distribute your podcasts to spotify. Apple Podcasts, Google
                Podcasts, Pocket Casts and more!
              </p>
            </div>
            <div className="flex items-center justify-between my-8">
              <img src={spotify} />
              <img src={applePodcast} />
              <img src={googlePodcast} />
              <img src={pocketCast} />
            </div>
            <div>
              <form>
                <div className="flex flex-col justify-center items-center space-y-4">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email address"
                    className="rounded-3xl border-none text-white font-bold bg-dark-blueish-gray px-4 py-2 w-full"
                  />
                  <p className="error text-red p-2" id="error"></p>
                  <button
                    type="submit"
                    className=" rounded-3xl bg-light-green p-2 w-full font-bold mb-10 md:absolute md:top-0 md:right-0 md:left-[60%] md:w-[40%]"
                  >
                    Request Access
                  </button>
                </div>
              </form>
            </div>

          </div>

        </section>

      </main>
    </>
  );
};

export default App;
