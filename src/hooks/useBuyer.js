import { useEffect, useState } from "react"

const useBuyer = (email) => {
    const [isBuyer, setIsBuyer] = useState(false);

    const [isSellerLoading, setIsSellerLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                    setIsBuyer(data.isBuyer);

                    setIsSellerLoading(false);
                })
        }
    }, [email]);
    return [isBuyer, isSellerLoading];
}

export default useBuyer;