import { Link } from "react-router-dom";

type breadCrumbProps = {
    paths : {
        id:number | string,
        title : string | number,
        path? : string
    }[],
    title:string
}
const BreadCrumb = ({paths,title}:breadCrumbProps) => {

    return ( 
        <article className="breadcrumb w-full min-h-[130px] bg-[#F8F8F8] p-3 relative">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.1)] py-8">
                <p className="text-center text-xl md:text-2xl lg:text-3xl text-mainColor basis-full capitalize">{title}</p>

                <ul className="flex items-center justify-center gap-4 basis-full capitalize text-[#757575] mt-2">
                    {paths?.map( (link,index)=>(
                        <li key={index} className={`flex items-center gap-x-1 transition-all ${index + 1 < paths?.length ? 'hover:text-mainColor' : null}`}>
                            {link?.path ? <Link to={link?.path}>{link?.title}</Link> : <span className="text-mainColor">{link?.title}</span>}
                            {index + 1  < paths?.length ? '/' : null}
                        </li>
                    ) )}
                </ul>
            </div>
        </article>
    );
}

export default BreadCrumb;