export default function Form() {
  return (
    <form>
      <div>
        <div className=" flex justify-around">
          <div className="flex flex-col">
            <label className="font-bold text-gray-600 mb-2"> FIRST NAME</label>
            <input className="bg-white border-2 border-yellow-400 rounded  h-full p-4 focus:outline-none focus:border-green-300" />
          </div>
          <div className="flex flex-col">
            <label className="font-bold text-gray-600 mb-2 uppercase">
              Last Name
            </label>
            <input className="bg-white border-2 border-yellow-400 rounded  h-full p-4 focus:outline-none focus:border-green-300  " />
          </div>
        </div>
      </div>
    </form>
  );
}
