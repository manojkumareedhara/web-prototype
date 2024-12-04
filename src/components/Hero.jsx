
const Hero = () => {
  return (
      <section id="home" className="w-full flex xl:flex-row  flex-col justify-center min-h-screen gap-10 max-container px-2 ">
          <div className="relative z-20 xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
              <p className="text-xl font-montserrat text-purple-900 font-semibold">
                  Meet your Tech requirements.
              </p>
              <h1 className="mt-10 font-palanquin text-4xl max-sm:text-[38px] max-sm:leading-[42px] font-bold">
                Unlock Your Potential with Expert <span className="text-purple-800 inline-block mt-3 ">IT Solutions</span><br />
                Customized <span className="text-purple-800 inline-block mt-3 ">IT Consulting </span>to Propel Your Success
              </h1>
              
          </div>
          <div className="relative flex-2 flex justify-center items-center xl:min-h-screen max-xl:py-40">
        <img src='public/Memorable design.png'
          alt='show collection'
          width={800}
          height={560}
                  className="object-contain relative" />
            </div>
          
    </section>
  )
}

export default Hero