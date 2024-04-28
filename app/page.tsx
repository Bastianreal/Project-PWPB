import Image from "next/image";
export default function Home() {
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
      ></div>
<div className="flex flex-col items-center h-screen justify-center gap-y-2">
<div className="font-bold text-7xl">Stay With Us And Enjoy <span className="text-green-400">Nature</span></div>
  <div className="w-[]">Enjoy being one with the nature like never before</div>
</div>
</>
  );
}
