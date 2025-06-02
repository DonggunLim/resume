const Hero = () => {
  return (
    <section className="flex h-screen flex-col items-start justify-center">
      <h1 className="block text-6xl text-white">Lim Donggun.</h1>
      <h1 className="text-primary text-7xl text-white">Web Developer</h1>
      <p className="text-text- my-5 text-lg font-medium">
        더 나은 개발자가 되기 위해서, 보고, 배우며, 만들어 보는 중입니다.
      </p>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="border-primary text-primary hover:bg-primary/30 mt-6 inline-block rounded border px-5 py-2 transition-colors duration-200 hover:text-white"
      >
        Resume
      </a>
    </section>
  );
};

export default Hero;
