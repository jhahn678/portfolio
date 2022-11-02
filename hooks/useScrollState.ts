import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'

export const useScrollState = () => {

    const router = useRouter()

    const [scrollState, setScrollState] = useState<{ [url: string]: number }>({})
    const navigatingBack = useRef(false)


    useEffect(() => {
        router.beforePopState(() => {
            navigatingBack.current = true;
            return true;
        })

        const onRouteChangeStart = () => {
            console.log({ [router.asPath]: window.scrollY })
            setScrollState(x => ({ ...x, [router.asPath]: window.scrollY }))
        }

        const onRouteChangeComplete = (url: string) => {
            console.log({ navigatingBack: navigatingBack.current, state: scrollState[url], url: url})
            if(navigatingBack.current && scrollState[url]){
                window.scroll({
                    top: scrollState[url],
                    behavior: 'auto'
                })
                navigatingBack.current = false;
            }
        }

        router.events.on("routeChangeStart", onRouteChangeStart)
        router.events.on("routeChangeComplete", onRouteChangeComplete)

        return () => {
            router.events.off("routeChangeStart", onRouteChangeStart)
            router.events.off("routeChangeComplete", onRouteChangeComplete)
        }
    },[router])
}

