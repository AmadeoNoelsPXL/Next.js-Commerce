import Image from "next/image";
import Link from "next/link";
export default function Product() {
  return (
    <div className="w-60 shadow-2xl m-4">
      <Image
        className="w-full object-fill overflow-hidden"
        src={`/grannySmith.jpeg`}
        width={100}
        height={200}
        alt="granny Smith"
      />
      <div className="bg-white">
        <div className=" p-4">
          <div className="grid grid-rows-1">
            <h5 className="place-self-center p-2">Granny Smith</h5>
            <h1 className="place-self-center p-2"> € 250</h1>
            <button className="rounded bg-blue-600 w-full p-2 text-white">
              <span>Add to Order</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
