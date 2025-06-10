import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import WithFlip from "@/components/ui/WithFlip";
import { Github } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex h-screen flex-col-reverse items-center justify-center gap-y-8 px-4 text-center md:flex-row md:gap-x-20 md:text-left"
    >
      <div className="text-left">
        <h1 className="text-highlight block text-6xl">Lim Donggun.</h1>
        <h1 className="text-7xl">Web Developer</h1>
        <p className="my-5 text-lg font-medium">
          더 나은 개발자가 되기 위해서, 보고, 배우며, 만들어 보는 중입니다.
        </p>
        <div className="flex items-center gap-x-4">
          <a
            href="https://github.com/DonggunLim"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="hover:text-highlight h-8 w-8" />
          </a>
        </div>
      </div>
      <div>
        <WithFlip className="h-72 w-72">
          <WithFlip.Front>
            <Avatar className="border-highlight flex h-full w-full items-center justify-center border-2">
              <AvatarImage src="/images/github_avatar.png" />
              <AvatarFallback>AVATAR</AvatarFallback>
            </Avatar>
          </WithFlip.Front>
          <WithFlip.Back>
            <Avatar className="flex h-full w-full items-center justify-center border-2 border-white">
              <AvatarImage src="/images/avatar.png" />
              <AvatarFallback>GITHUB</AvatarFallback>
            </Avatar>
          </WithFlip.Back>
        </WithFlip>
      </div>
    </section>
  );
};

export default Hero;
