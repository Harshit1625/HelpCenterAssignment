const CardSection = ({ data }) => {
  console.log(data)
  return (
    <div className="lg:pl-[22vw] lg:pr-[22vw] p-10">
      <div className="grid grid-cols-2 gap-[3vw] text-black">
        {data.map((card) => (
          <div
            key={card?.id}
            className="flex flex-col bg-gray-300 shadow-md p-8 gap-5 rounded-lg"
          >
            <h3 className="text-black text-[15px] font-bold border-b">
              {card?.title}
            </h3>
            <p className="text-gray-700 text-[14px] font-medium">
              {card?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
