const Hero = () => {
  return (
    <section className="h-screen flex flex-col items-start justify-center">
      <h1 className="text-7xl block">Lim Donggun.</h1>
      <h1 className="text-7xl text-primary">Web Developer</h1>
      <p className="mt-5 text-md">
        더 나은 개발자가 되기 위해서, 보고, 배우며, 만들어 보는 중입니다.
      </p>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 border border-primary text-primary px-5 py-2 rounded hover:bg-primary/30 hover:text-white transition-colors duration-200"
      >
        Resume
      </a>
    </section>
  );
};

export default Hero;
