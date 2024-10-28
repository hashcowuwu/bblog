import "./globals.css";
import Image from "next/image";
import KindTitle from "./components/KindTitle";
export default function Home() {
  return (
    <div>
      <div className="m-32 drop-shadow-lg hover:drop-shadow-xl bg-white">
        <Image 
          src="/tt.jpg"
          width={500}
          height={500}
          alt="image"
        />
      </div>
    </div>
  );
}
