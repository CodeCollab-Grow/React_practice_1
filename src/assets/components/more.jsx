export default function About() {
  return (
    <>
      <div className="about flex flex-row items-center justify-center gap-20 h-[60vh] w-full bg-white p-10">
        <div
          className="1 border-4 border-dashed border-gray-600 p-4 rounded-lg
            transition-all duration-200
            hover:-translate-x-2 hover:-translate-y-2
            hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.6)] w-[100vw] h-auto "
        >
          <h1>Lorem</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae maiores eveniet aut, voluptatibus recusandae doloribus
            repellat corrupti amet sapiente accusamus.
          </p>
        </div>
        <div
          className="2 border-4 border-dashed border-gray-600 p-4 rounded-lg
            transition-all duration-200
            hover:-translate-x-2 hover:-translate-y-2
            hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.6)] w-[100vw] h-auto"
        >
          <h1>Lorem</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi
            cumque magni eligendi quia accusantium quisquam qui et explicabo
            veniam?
          </p>
        </div>
        <div
          className="3 border-4 border-dashed border-gray-600 p-4 rounded-lg
            transition-all duration-200
            hover:-translate-x-2 hover:-translate-y-2
            hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.6)] w-[100vw] h-auto"
        >
          <h1>Lorem</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            commodi. Voluptates quisquam tempore eaque reprehenderit ipsam
            suscipit mollitia facere odio?
          </p>
        </div>
      </div>
    </>
  );
}
