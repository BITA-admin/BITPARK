import Soluction_Banner from "../../assets/all-images/standard-quality-control-concept-m.png";

const Solution_banner = () => {
  return (
    <div className="relative h-screen w-full">
      <img
        src={Soluction_Banner}
        alt="bitpark-Solution"
        className="absolute inset-0 w-full h-full object-cover filter"
      />

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-4xl text-white font-bold">
          Enterprise Resource Planning (ERP) Solutions:{" "}
        </h1>
        <p className="text-xl text-white mt-4">
          Streamlining Business Operations for Enhanced Efficiency
        </p>
      </div>
    </div>
  );
};

export default Solution_banner;
