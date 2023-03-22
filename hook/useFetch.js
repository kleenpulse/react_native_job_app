import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': '692e582ffemsh33f18c38be3ae5bp12ee79jsn3b74bca03a9c',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
    };

    const fetchData = async () => {
        setIsLoading(true)

        try {
            const res = await axios.request(options)
            setData(res.data.data)
        } catch (error) {
            setError(error)
            alert("Something went wrong")
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()

    }, [])

    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }

    return { data, isLoading, error, refetch }

}

export default useFetch