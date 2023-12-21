import clsx from "clsx"

export default function Item ({text, onDelete}){
    return(
        <article 
        // className="flex justify-between bg-gray-700 p-4 rounded-lg items-center"
        className={clsx(
            "flex justify-between rounded-lg", 
            "items-center p-4 ", 
            "bg-gray-700",
            {"bg-red-500 font-bold": text.includes("importante")}
            )}
        >
            <span>{text}</span>
            <span onClick={onDelete} className=" font-bold bg-black p-2 rounded-lg hover:bg-neutral-800 cursor-pointer">Done</span>
        </article>
    )
}