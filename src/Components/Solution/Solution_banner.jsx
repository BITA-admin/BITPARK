const Solution_banner = () => {
  return (
    <div class="relative h-screen w-full">
      <img
        src="src/assets/all-images/standard-quality-control-concept-m.png"
        alt="bitpark-Solution"
        class="absolute inset-0 w-full h-full object-cover filter blur-sm"
      />
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <h1 class="text-4xl text-white font-bold">
          Enterprise Resource Planning (ERP) Solutions:{" "}
        </h1>
        <p class="text-xl text-white mt-4">
          Streamlining Business Operations for Enhanced Efficiency
        </p>
      </div>
    </div>
  );
};

export default Solution_banner;
