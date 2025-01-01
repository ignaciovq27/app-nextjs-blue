//COMPONENTS
import { LucideIcon } from "lucide-react";

interface Props {
    icon: LucideIcon;
    itemText: string;
}

const ItemList = ({ icon: Icon, itemText }: Props) => {
    return (
        <li className="flex gap-2 items-start md:items-start">
            <span className="mt-0">
                {Icon && <Icon size={20} className="stroke-blue-500 fill-white pt-1 md:pt-0" />}
            </span>
            <span>{itemText}</span>
        </li>
    );
};

export default ItemList