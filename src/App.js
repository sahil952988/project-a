import React from 'react'

const App = () => {
  return (
    <div>
      <nav className="flex  bg-[#36454F] h-20">
      <p className="text-white ml-[200px] mt-5 flex">
        <i class="fa-brands fa-slack"></i>
        <p className=" ml-5">The North</p>
        </p>
      <p className="text-white ml-10 mt-5"><i class="fa-solid fa-table-cells-large"></i>   Dashboard</p>
      <p className="text-white ml-10 mt-5"><i class="fa-solid fa-puzzle-piece"></i>       products</p>
      <p className="text-white ml-10 mt-5"><i class="fa-regular fa-compass"></i>         performance</p>
      <p className="text-white ml-10 mt-5">  <i class="fa-solid fa-code"></i>           Delivarables</p>
      <p className="vl ml-36"></p>
      <i class="fa-solid fa-magnifying-glass"></i>
      <p className="vl"></p>
      <i class="fa-regular fa-message"></i>
      <p className="vl"></p>
      <i class="fa-regular fa-bell"></i>
      <p className="vl"></p>
      <div className=" flex ml-10">
      <img className=" w-[50px]  h-[70px] pt-3 rounded-lg"src="https://media.istockphoto.com/id/1315808211/photo/passport-photo-of-serious-brazilian-young-adult-man-with-braces.webp?b=1&s=170667a&w=0&k=20&c=n3axGyWzgMdSOlF4rTmah7REFDUp6267MndSHdC6Ygc="/>  
      <p className=" pt-5 ml-3 text-white">Jhone Doe</p>
      </div>
      </nav>

      <main className="flex ml-40 mt-6 h-[100px]">
        <p>
        <p className=" text-blue-700 text-[16px]" >Portal > Dashboard > KPIs</p>
        <p className=" text-[30px] "><b>Dashboard</b></p>
        </p>
        <button className="text-blue-800 ml-[900px] mt-5 border border-gray-500 box-border h-10 w-20 rounded-lg"> Back</button>
        <button className="text-white bg-blue-700 ml-5 mt-5 border border-gray-500 box-border h-10 w-32 rounded-lg"> Edit Profile</button>
      </main>

<div className="bg-[#899499] w-[1500px] h-[600px]">
      <header className=" grid grid-cols-3  pt-20">
        <div className="info1  bg-[#FAF9F6] box-border  ml-40 h-[420px] w-[420px] border-2 shadow-lg ">
           <img className="rounded-full shadow-slate-800 w-20 ml-[168px] mt-5 "src="https://i.pinimg.com/originals/c3/33/27/c333273fcfc3198e93df380c0cfc0437.jpg"/>
           <p className="ml-[100px] text-[20px] pt-4"> Timothy Jhon Oliphant</p>
           <p className="ml-[120px] pb-4 pt-2"><i class="fa-solid fa-location-dot"></i>  Las Vegas Nevada</p>
           <p className="ml-[100px] mr-10">The more I deal with the work as something that is my own,as something that is personal , the more successful it is.</p>
           <div className="IN flex mt-6 ml-[90px]">
            <p>
              <p className=" text-[30px] text-gray-500">82</p>
              <p>Reviews</p>
            </p>
            <p className="a"></p>
            <p className=" ml-3">
              <p className=" text-[30px] text-gray-500">28</p>
              <p>Projects</p>
            </p>
            <p className="a"></p>
            <p className=" ml-3">
              <p className=" text-[30px] text-gray-500">42</p>
              <p>Approved</p>
            </p>

           </div>
        </div>
        <div className="info2  bg-[#FAF9F6] ml-20 box-border h-[420px] w-[420px] border-2 shadow-lg">
        <i class="fa-solid fa-cubes"></i>
        <p className="ml-[120px] text-[22px]">Senior Product Designer</p>
        <p className="ml-[185px] text-[18px] ml-52">Freelance</p>
        <p className="ml-[100px] mt-5">Jhon is a true asset to us , providing advanced designed skills from years of experiences as UX designer.</p>

      <div className="flex ml-24 mt-5">
        <p className=" mt-5 bg-gray-400 border-2 border-gray-500 box-border h-8 w-20 pl-2 rounded-lg">Interface </p>
        <p className="ml-2 mt-5 bg-gray-400 border-2 border-gray-500 box-border h-8 w-20 pl-2 rounded-lg">Interface</p>
        <p className=" ml-2 mt-5 bg-gray-400 border-2 border-gray-500 box-border h-8 w-20 pl-2 rounded-lg">Interface</p>
      </div>
      <div className="flex ml-24">
        <p className="mt-5   bg-gray-400 border-2 border-gray-500 box-border h-8 w-20 pl-2 rounded-lg">Interface</p>
        <p className="mt-5 ml-2  bg-gray-400 border-2 border-gray-500 box-border h-8 w-20 pl-2 rounded-lg">Interface</p>
        <p className="mt-5 ml-2  bg-gray-400 border-2 border-gray-500 box-border h-8 w-20 pl-2 rounded-lg">Interface</p>
      </div>
        </div>
        <div className="info3 box-border h-[420px] w-[420px] border-2 shadow-lg bg-[#FAF9F6] ">
          <p className="ml-[130px] text-[30px] mt-5">$90</p>
          <p className="ml-[120px] text-[16px] text-gray-500">Hourly rate</p>
          <p className="ml-[130px] text-[30px]">$32000</p>
          <p className="ml-[120px] text-[16px] text-gray-500">Total Earned</p>
          <p className="ml-[130px] text-[30px]">2000</p>
          <p className="ml-[120px] text-[16px]  text-gray-500">Hours Worked</p>
          <p className="ml-[130px] text-[30px]"> 90%</p>
          <p className="ml-[120px] text-[16px]  text-gray-500">Sucess Rate</p>
          <p className="flex ml-[120px]">
          <p className="c"> <i class="fa-solid fa-star"></i></p>
          <p className="c"> <i class="fa-solid fa-star"></i></p>
          <p className="c"> <i class="fa-solid fa-star"></i></p>
          <p className="c"> <i class="fa-solid fa-star"></i></p>
          <p className="b"> <i class="fa-solid fa-star"></i></p>
          </p>
        </div>

      </header>
      </div>

    </div>
  )
}

export default App