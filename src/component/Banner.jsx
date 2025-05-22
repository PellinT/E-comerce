export default function Banner() {
  return (
   <div className="relative">
    <img className="w-full" src="flone.jpg" alt=""/>
    
    <div className="absolute top-50 right-50 flex flex-col justify-center text-center gap">
      {/* { <h3 className="text-3xl before:content -[''] before:absolute before:w-[50px] before:h-[2px] before:bg-slate-900
      before:left-[2rem] before:top-6 after:absolute after:content-[''] after:w-[50px] after:h-[2px] after:bg-slate-900
       after:right-[2rem] after:top-6">
        Stylish
      </h3> } */}
      <div className=" flex items-center justify-center gap-4">
        <span className="inline-block w-[50px] h-[2px] bg-slate-900 "  ></span>
        <h3 className="text-4xl+9">Stylish</h3>
        <span className="inline-block w-[50px] h-[2px] bg-slate-900 gap-2"></span>
      </div>
      <h1 className="text-5xl">Male Clothes</h1>
      <p className="text-xs">30% off summer vacation</p>
      <button className="border pw-4 w-30 h-10 mx-auto capitalize bg-slate-900 text-slate-50 hover:bg-transparent
      hover:text-slate-900 transition-all duration-1000">Shop Now</button>
    </div>
   </div>
  );
}
