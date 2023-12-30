const Education = () => {
  return (
    <div className="relative h-auto w-11/12 lg:w-[920px]">
      <div className="text-white bg-soft p-4 lg:p-8 rounded-xl">
        <div className="flex gap-2">
          <div className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className=" w-6 h-6"
            >
              <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
              <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
              <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
            </svg>
          </div>
          <div className="font-primary font-semibold text-lg uppercase text-white mb-2">
            Education
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-7 lg:gap-2">
          <div className="basis-1/2">
            <small className="font-sans font-bold italic">2008-2014</small>
            <div className="foprimary font-bold text-primary text-md">
              Elementary
            </div>
            <p className="foprimary">Cataggaman Elementary School</p>
          </div>
          <div className="basis-1/2">
            <small className="font-sans font-bold italic">2014-2018</small>
            <div className="foprimary font-bold text-primary text-md">
              Junior High School
            </div>
            <p className="foprimary">Cataggaman National High School</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-7 lg:gap-2 mt-4">
          <div className="basis-1/2">
            <small className="font-sans font-bold italic">2018-2020</small>
            <div className="foprimary font-bold text-primary text-md">
              Senior High School (TVL-ICT)
            </div>
            <p className="foprimary">Cataggaman National High School</p>
          </div>
          <div className="basis-1/2">
            <small className="font-sans font-bold italic">2020-2024</small>
            <div className="font-primary font-bold text-primary text-md">
              Bachelor of Science in Information Technology
            </div>
            <p className="font-primary">University of Saint Louis Tuguegarao</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
