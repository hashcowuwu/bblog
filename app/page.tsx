import "./globals.css";
import Image from "next/image";
import KindTitle from "./components/KindTitle";
import Poster from "./components/Poster";
export default function Home() {
  return (
    <div className="h-full">
      <div className="m-64 drop-shadow-xl hover:drop-shadow-2xl backdrop-blur-sm bg-white/30 flex flex-row">
        <div className="bg-transparent">
          <Image className="float-left bg-transparent"
            src="/tt.jpg"
            width={500}
            height={500}
            alt="image"
          />
        </div>
        <div className="font-mono  w-full m-9 h-full ">
          <p className="font-mono">
            This website is based on Next.Js
          </p>
          <p className="font-mono">
            I use Arch BTW :)
          </p>
        </div>
      </div>
      <div className="grid grid-rows-3 grid-flow-col gap-8 m-64 ">
        <div className="row-span-3 backdrop-blur-sm  bg-cyan-500/30 shadow-lg shadow-cyan-500/50  drop-shadow-xl hover:drop-shadow-2xl font-mono">01</div>
        <div className="col-span-2 h-64 backdrop-blur-sm bg-blue-500/30 shadow-lg shadow-blue-500/50 drop-shadow-xl hover:drop-shadow-2xl font-mono">02</div>
        <div className="row-span-2 col-span-2 backdrop-blur-sm bg-indigo-500/30 shadow-lg shadow-indigo-500/50 drop-shadow-xl hover:drop-shadow-2xl font-mono">03</div>
      </div>
    </div>
  );
}
