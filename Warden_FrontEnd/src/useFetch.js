import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [isError, setIsError] = useState(null);


    useEffect(() => {
        const abortCont = new AbortController();


        setTimeout(() => {
            fetch(url, {signal: AbortController.signal})
                .then(Res =>  {
                    if (!Res.ok) {
                        throw Error('could not get data')
                    }
                    return Res.json()
                })
            
                .then((data) => {
                    console.log(data)
                    setData(data)
                    setIsPending(false)
                } )
                .catch((err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted')
                    } else {
                        setIsPending(false);
                        setIsError(err.message);}
                }))
        },1000);

        return () => abortCont.abort();
    }, [url]);

    return {data, isPending, isError}
};

export default useFetch;