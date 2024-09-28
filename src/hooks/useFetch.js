import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { AppContext } from "../App";

const useFetch = (url, type) => {
    const [loading, setLoading] = useState(false);
    const { state, dispatch } = useContext(AppContext);
    

    useEffect(() => {
        // We have to fetch the data only if the specified time has passed
        if (state[type].next_fetch_at <= new Date()) {
            setLoading(true);
            axios.get(url)
                .then(res => {
                    // let update the state and us add at least 10 minutes fron now in order
                    // to avoid frequent fetching of data
                    const next_fetch_at = new Date(new Date().getTime() + 10 * 60 * 1000);
                    dispatch({
                        type,
                        payload: {
                            next_fetch_at,
                            data: res.data
                        }
                    });

                }).catch((err) => {
                    console.log(err);
                    toast.error("There was an error!")
                })
                .finally(() => setLoading(false))
        }

    }, []);

    return{ loading };
}

export default useFetch;