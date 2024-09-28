import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../App";

export default function useFetchSingle(id, type, url) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const { state } = useContext(AppContext);
    const arrayData = state[type].data;

    useEffect(() => {
        setLoading(true)
        const singleData = arrayData.find(dt => dt.id == id);
        if (singleData) {
            setData(singleData);
            setLoading(false);
        } else {
            axios.get(url).then((res) => {
                setData(res.data);
            })
                .catch(error => {
                    console.log(error);
                    throw new Error("Failed to fetch a post")
                })
                .finally(() => setLoading(false))
        }

    }, [])

    return {
        loading,
        data
    }

}