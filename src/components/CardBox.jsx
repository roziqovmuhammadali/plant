import image01 from "../../public/01.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function ImageBox() {
  return (
    <div className="mt-5 flex h-[250px] w-[586px] items-center justify-between rounded bg-[#FBFBFB] p-6 shadow-lg">
      <img className="h-[222px] w-[212px] rounded" src={image01} alt="image" />
      <div className="flex flex-col items-center  py-4 text-end">
        <h1 className="mb-2 w-[290px] text-xl font-bold">
          Summer cactus <br />& succulents
        </h1>
        <p className="w-[310px] pb-4 text-gray-700">
          We are an online plant shop offering a wide <br /> range of cheap and
          trendy plants
        </p>
        <button className="ml-32 flex h-[40px] w-[150px] items-center justify-center gap-2 rounded-md bg-[#46A358] text-white">
          <span>Find More</span>
          <span>
            <ArrowForwardIcon />
          </span>
        </button>
      </div>
    </div>
  );
}

function CardBox() {
  return (
    <div className="flex items-center justify-between px-[150px]">
      <div className="flex h-[250px] w-[586px] items-center justify-between">
        <ImageBox
          image="https://via.placeholder.com/250"
          title="Title"
          subtitle="Subtitle"
        />
      </div>
      <div className="flex h-[250px] w-[586px] items-center justify-between">
        <ImageBox
          image="https://via.placeholder.com/250"
          title="Title"
          subtitle="Subtitle"
        />
      </div>
    </div>
  );
}

export default CardBox;
