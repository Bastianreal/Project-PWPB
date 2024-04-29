import Image from "next/image";
import HeroBackground from "../public/HeroBackground.jpg"
export default function Hero() {
  return (
<>
<div
        className="w-full md:h-[90vh] h-[85vh] overflow-hidden relative"
        style={{
          backgroundImage: `url(${HeroBackground.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
<div className="flex flex-col items-center h-screen justify-center gap-y-2">
<div className="font-bold text-7xl text-black">Stay With Us And Enjoy <span className="text-green-400">Nature</span></div>
  <div className="text-3xl stroke-black stroke-">Enjoy being one with the nature like never before</div>
  <div></div>
</div>
</div>
</>
  );
}