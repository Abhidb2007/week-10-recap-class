export function VideoCard(){
    return <div>
        <img src="/photo.jpg"></img>
        <div className=" grid grid-cols-12">
            <div className="col-span-2">
                <img className={"rounded-full w-16 h-16"} src="/photo.jpg"></img>
            </div>
            <div className="col-span-10
            pl-0
            font-cursors
            
            text-lg
            ">
                kgf:chapter 2
               <p> 1.3M views . 2 days ago</p>

            </div>
            <div className="col-span-1 pl-5">
                abhi
            </div>
            <div className="col-span-12 pl-25 text-gray-600 text-base">
                action.drama||45min
            </div>    
        </div>
    </div>
}
        