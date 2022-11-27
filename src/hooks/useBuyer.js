import { useEffect, useState } from "react"

const useBuyer = (email) => {
    const [isBuyer, setIsBuyer] = useState(false);

    const [isSellerLoading, setIsSellerLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`https://bike-picker-server.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {

                    setIsBuyer(data.isBuyer);

                    setIsSellerLoading(false);
                })
        }
    }, [email]);
    return [isBuyer, isSellerLoading];
}

export default useBuyer;