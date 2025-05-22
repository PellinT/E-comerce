import { CiDeliveryTruck } from "react-icons/ci";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { TbClock24 } from "react-icons/tb";
import Card from "./Card";
const cardInfo = [
    {title:"free shipping",
        icon: <CiDeliveryTruck/>,
    },

    {
        title: "Support 24/7",
        icon:<TbClock24/>,
    },

    {
        title:"Money Return",
        icon:<FaMoneyBillTransfer />, 
    }
]
export default function CardRow() {
  return (
    <div className="flex direction-right justify-evenly py-10 " >
      {cardInfo.map((info)=> <Card key={info.title} title={info.title}> {info.icon} </Card>)}
    </div>
  );
}
