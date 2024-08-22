import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment/${user.email}`);
            return res.data;
        }
    });

    return (
        <div className="p-4">
            <h2 className="text-xl md:text-3xl font-semibold mb-4">Total Payments: {payments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full text-xs md:text-base">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th className="font-bold">Name</th>
                            <th className="font-bold">Price</th>
                            <th className="font-bold">Transaction ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => (
                            <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td className="font-bold text-red-600">{payment.name}</td>
                                <td className="text-green-600 font-bold">${payment.price}</td>
                                <td className="font-bold">{payment.transactionId}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
