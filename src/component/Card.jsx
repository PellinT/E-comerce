 
 
 export default function Card ({title, children}){

    return <div className="flex justify-center items-center flex-col w-[250px] py-10">
        <div className="text-4xl">{children}</div>
        <h3 className="text-base font-semibold"> {title}</h3>
        <p className="text-xs">Packaged with care</p>

    </div>
}

