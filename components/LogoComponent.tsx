import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex justify-center items-center">
      <Image
        className="p-4"
        src={`/football.png`}
        width={80}
        height={80}
        alt="Logo"
      />
      <div className="p-4">WebShop</div>
    </div>
  );
}
