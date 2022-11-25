import { useEffect, useState } from "react"

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);

    const [isaAdminLoading, setIsAdminLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {

                    setIsAdmin(data.isAdmin);

                    setIsAdminLoading(false);
                })
        }
    }, [email]);
    return [isAdmin, isaAdminLoading];
}

export default useAdmin;