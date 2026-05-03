interface ListItemProps {
    icon : React.ReactNode;
    title: string;
    description: string;
}

    const ListItem = ({ icon, title, description }: ListItemProps) => {
    return (
        <div className="flex flex-row items-start ">
            {/* icon */}
            <div className="h-9 w-9  border-2 border-blue-600 flex items-center justify-center p-1.5">
                {icon}
            </div>

            <div className="flex flex-col ml-5">
                {/* title */}
                <h2 className="text-xl font-semibold text-blue-600 mb-2.5">{title}</h2>
                {/* description */}
                <p className="text-gray-700 text-[1rem] ">{description}</p>
            </div>
            
            
        </div>
    );
};

export default ListItem;