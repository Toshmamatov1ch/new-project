function InformationCard({ information }) {
  return (
    <div className="border border-gray-300 p-8.25 shadow-sm rounded-2xl w-full  max-w-96 transition-all duration-300  hover:shadow-xl hover:-translate-y-2 group">
      <img
        className="mb-4 w-12 h-12 "
        src={information.icon}
        alt={information.title}
      />
      <h3 className="mb-2.25 text-[#0F1729] font-inter font-semibold text-[20px] leading-7 space-x-0.5">
        {information.title}
      </h3>
      <p className="font-inter text-[#6B7280] leading-6 align-middle">
        {information.desc}
      </p>
    </div>
  );
}

export default InformationCard;
