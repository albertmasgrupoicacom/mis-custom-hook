import { useEffect, useState , useRef } from 'react'

export const useFetch = (url) => {

    const isMounted = useRef(true);
    const [state, setstate] = useState({data:null,loading:null,error:null});

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {

            setstate({data:null,loading:true,error:null});
            fetch(url)
                .then( resp => resp.json())
                .then( data => {
                
                        if( isMounted.current){
                            setstate({
                                loading:false,
                                error: null,
                                data
                            });
                        }
                })
                .catch( () => {
                    setstate({
                        data:null,
                        loading:false,
                        error:'no info'
                    })
                })
    }, [url])

   return state;
}
