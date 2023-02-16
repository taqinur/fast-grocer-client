import { useEffect, useState } from "react";

const useFindBuyer = email => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [isBuyerLoading, setIsBuyerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://fg-server.vercel.app/users/buyers/${email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    setIsBuyer(data.isBuyer);
                    setIsBuyerLoading(false);
                })
        }
    }, [email])
    return [isBuyer, isBuyerLoading]
};

export default useFindBuyer;