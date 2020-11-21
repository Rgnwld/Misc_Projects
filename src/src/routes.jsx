import React, { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import DecToBin from "./Components/DecToBinary_srcFiles/DecToBin";
import StopWatch from "./Components/stopwatch_srcFiles/Stopwatch";
import BorderRadius from "./Components/borderRadius_srcFiles/borderRadius";

export default function App() {
    const [page, setPage] = useState({ n: 1, url: <StopWatch /> });

    function handleCallback(e) {
        console.log(e);
        console.log(page);
        setPage({ ...page, n: e });
    }

    useEffect(() => {
        switch (page.n) {
            case 1:
                setPage({ ...page, url: <StopWatch /> });
                break;
            case 2:
                setPage({ ...page, url: <BorderRadius /> });
                break;
            case 3:
                setPage({ ...page, url: <DecToBin /> });
                break;
        }
    }, [page.n]);
    return (
        <>
            <Header callback={handleCallback.bind(this)} />
            {page.url}
        </>
    );
}
