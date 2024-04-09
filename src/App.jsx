import { PiApplePodcastsLogoFill } from "react-icons/pi";
import { SiGooglepodcasts } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import { SiPocketcasts } from "react-icons/si";

const App = () => {
  return (
    <>
      <main>
        <section>
          <div className="logo"></div>
          <div className="content">
            <div>
              <h1>
                Publish your podcasts <span>everywhere.</span>
              </h1>
              <p>
                Upload your audio to Pad with a single click. We'll then
                distribute your podcasts to spotify. Apple Podcasts, Goggle
                Podcasts, Pocket Casts and more!
              </p>
            </div>
            <div>
              {" "}
              <FaSpotify />
              <PiApplePodcastsLogoFill />
              <SiGooglepodcasts />
              <SiPocketcasts />
            </div>
            <div>
              <form>
                <div>
                  <input type="email" name="email" id="email" placeholder="Email address"/>
                  <button type="submit">Request Access</button>
                </div>
              </form>
            </div>
          </div>
          <div></div>
        </section>
      </main>
    </>
  );
};

export default App;
