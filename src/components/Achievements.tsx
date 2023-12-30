const achievements = [
  { name: "Computer Literacy Training", year: "2016" },
  { name: "Computer System Servicing NC II", year: "2019" },
  { name: "Dean Lister", year: "2022-2023" },
  {
    name: "DigitalJobsPH Training - General Virtual Assistance Course - Gold Medalist",
    year: "2022",
  },
  {
    name: "Top startup finalists for iDeaTech Challenge 2023 ",
    year: "2023",
  },
  {
    name: "Google Developer Students Club Officer",
    year: "2022 - 2024",
  },
];

const Achievements = () => {
  return (
    <div className="mx-auto h-auto w-11/12 lg:w-[920px] rounded-2xl">
      <div className="text-white bg-soft p-4 lg:p-8 rounded-xl">
        <div className="flex gap-2 ">
          <div className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              />
            </svg>
          </div>
          <div className="font-primary font-semibold text-lg uppercase text-white mb-2">
            Achievements
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <div className="flex flex-col" key={index}>
              <small className="font-sans font-bold italic">
                {achievement.year}
              </small>
              <div className="font-primary font-medium text-primary text-sm">
                {achievement.name}
              </div>
            </div>
          ))}
        </div>
        <div className="flex"></div>
      </div>
    </div>
  );
};

export default Achievements;
