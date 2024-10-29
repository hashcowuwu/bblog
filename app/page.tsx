import "./globals.css";
import Image from "next/image";
import KindTitle from "./components/KindTitle";
export default function Home() {
  return (
    <div className="bg-gradient-to-r  ">
      <div className="m-32 drop-shadow-xl hover:drop-shadow-2xl bg-white flex flex-row">
        <div className="bg-transparent">
        <Image className="float-left bg-transparent"
          src="/tt.jpg"
          width={500}
          height={500}
          alt="image"
        />
        </div>
        <div className="font-mono hover:bg-slate-50 w-full">
          HashCat
        </div>
      </div>
    </div>
  );
}
