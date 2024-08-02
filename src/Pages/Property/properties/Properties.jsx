import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect} from "react";
import useProperties from "../../../hooks/useProperties";
import Loading from '../../../Loading/Loading';
import Card from "./Card";

const Properties = () => {
    const [Properties,loading] = useProperties();
 
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        AOS.refresh();
    }, []);
    if(loading)
        return <Loading></Loading>
    
    return (
        <div className="my-[100px] ">
                <div className="grid grid-cols-1 gap-8">
                    {Properties.map((Property) => (
                      <Card key={Property._id}  Property={Property} />
                    ))}
                </div>
         
           
        </div>
    );
};

export default Properties;
