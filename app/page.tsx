import "./globals.css";
import Image from "next/image";
import KindTitle from "./components/KindTitle";
import Poster from "./components/Poster";
export default function Home() {
  return (
    <div className="box-border h-128 ">
      <div className="m-64 drop-shadow-xl hover:drop-shadow-2xl bg-white flex flex-row">
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
    </div>
  );
}
