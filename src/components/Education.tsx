function Education() {
  return (
    <div className="h-auto w-11/12 lg:w-[920px] rounded-2xl ">
      <div className="font-mono font-semibold text-4xl uppercase text-white mt-5 mb-3">
        Education
      </div>
      <div className="text-white bg-soft p-4 lg:p-8 rounded-xl">
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
}
export default Education;
