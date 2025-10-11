export function VideoCard(props:any){
    return <div>
        <img src="/photo.jpg"
        className="rounded-xl"></img>
        <div className=" grid grid-cols-12">
         <div className="col-span-2">
            <img className={"rounded-full w-15 h-15"} src="/thumb.jpg"></img>
         </div>
          <div className="col-span-8
            pl-0
            font-cursors
            
            text-lg
            ">
                <div>
                {props.title}
                </div>

            
            <div className="col-span-12 pl-1">
                {props.author}
            </div>
            <div className="col-span-12 pl-1 text-gray-600 text-base">
                {props.views} | {props.timestamp}
            </div>
          </div> 
              
        </div>
    </div>
}
        