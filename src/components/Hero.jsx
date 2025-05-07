import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useState } from "react";
import { useEffect } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 });

    gsap.to("#cta", { opacity: 1, y: -50, delay: 2 });
  }, []);

  return (
    <section className="w-full h-[calc(100vh-60px)] bg-black relative">
      <div className="h-5/6 w-full flex items-center justify-center flex-col">
        <p
          className="text-center font-semibold text-3xl text-gray opacity-0 max-md:mb-10"
          id="hero"
        >
          iPhone 16 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            src={videoSrc}
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
          ></video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a
          href="#highlights"
          className="px-5 py-2 rounded-3xl bg-blue my-5 hover:bg-transparent border border-transparent hover:border hover:text-blue hover:border-blue"
        >
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month or $9999</p>
      </div>
    </section>
  );
};

export default Hero;
