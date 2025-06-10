import Image from "next/image";
import React from "react";

const Album = () => {
  return (
    <div className=" w-fit h-fit flex items-center justify-center">
      <div className="h-40 w-40 relative flex items-center -translate-x-9 justify-center">
        <div className='w-full h-full bg-[url("/img/ji.jpg")] relative bg-cover bg-no-repeat z-10'>
          <Image src="/img/album/foo-fighters.png" className="mix-blend-plus-lighter" alt="album" fill />
        </div>

        <div className="h-full w-full flex items-center pointer-events-none justify-center absolute -right-1/2  animate-spin">
          <Image src="/img/vinyl.png" className="h-full w-full" alt="album" width={300} height={300} />
          <Image src="/img/album/foo-fighters.png" className="h-16 w-16 opacity-90 z-0 rounded-full absolute" alt="album" width={300} height={300} />
        </div>
      </div>
    </div>
  );
};

export default Album;
