import reviewIcon from "../../assets/images/reviews.png";
import reviewLogo from "../../assets/images/reviews_logo.png";
import heroBanner from "../../assets/images/hero_banner.png";
const Hero = () => {
  return (
    <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row justify-between xl:gap-0 gap-4 items-center h-full py-8 lg:py-0 lg:h-[calc(100vh-90px)]">
      <div className="w-full lg:w-4/12 space-y-8 xl:space-y-10">
        <div className="space-y-4">
          <h2 className="font-bold text-4xl xl:text-5xl text-primary-text">
            Take ideas from better to best
          </h2>
          <p className="text-base xl:text-lg text-secondary-text">
            Miro is your team&apos;s visual platform to connect, collaborate,
            and create — together.
          </p>
        </div>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Enter your work email"
            className="text-lg text-secondary-text py-3 px-7 rounded-full w-full border-secondary-text"
          />
          <button className="py-5 px-7 bg-primary-bg hover:bg-secondary-bg duration-300 cursor-pointer border-0 text-white rounded-full w-full">
            Sign up free →
          </button>
          <p className="text-secondary-text">
            Collaborate with your team within minutes
          </p>
        </form>
        <div className="bg-[#F5F5F7] rounded-lg p-4 flex justify-between items-center w-full xl:w-[380px]">
          <div>
            <img src={reviewIcon} alt="reviewIcon" className="w-full h-full" />
            <p className="text-primary-text text-xs">Based on 5149+ reviews:</p>
          </div>
          <div>
            <img src={reviewLogo} alt="reviewLogo" className="w-full h-full" />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-8/12 flex justify-end lg:h-[600px]">
        <img
          src={heroBanner}
          alt="heroBanner"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
