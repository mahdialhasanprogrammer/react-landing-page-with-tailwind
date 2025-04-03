import Button from "./buttonCommon";
function Hero() {
  return (
    <>
      <main className="container font-poppins mt-16 mx-auto">
        <section className="flex flex-col md:flex-row mx-8">
          <div className="flex-1 space-y-5">
            <h1 className="lg:text-8xl text-4xl font-extrabold lg:leading-24 ">
              YOUR FEET DESERVE THE BEST
            </h1>
            <p
              className="text-[16px] text-secondary;
]"
            >
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
              SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
              OUR SHOES.
            </p>
            <div className="flex gap-7">
              <Button>Shop Now</Button>
              <button className="border-2 cursor-pointer border-secondary text-secondary px-4 py-1.5">
                Category
              </button>
            </div>
            <div className="space-y-2.5">
              <p>Also Available On</p>
              <div className="flex gap-3">
                <a href="#">
                  <img src="/images/amazon.png" alt="amazon logo with link" />
                </a>
                <a href="#">
                  <img
                    src="/images/flipkart.png"
                    alt="flipkart logo with image"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img src="/images/shoe_image.png" alt="" />
          </div>
        </section>
      </main>
    </>
  );
}

export default Hero;
