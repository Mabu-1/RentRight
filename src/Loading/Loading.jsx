
import { SyncLoader } from "react-spinners";


const Loading = () => {
    return (
        <div className="flex h-screen items-center justify-center">
            <SyncLoader

                size={150}
                color={"#36D7B7"}
                loading={true}
            />
        </div>
    );
};

export default Loading;
