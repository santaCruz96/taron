import { createContext, useContext, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin)

const ScrollContext = createContext()

export const useScroll = () => useContext(ScrollContext)

function ScrollProvider({ children })  {
    const sectionRefs = useRef({})

    const registerSection = (name, ref) => {
        sectionRefs.current[name] = ref
    }

    const scrollToSection = (name) => {
        const section = sectionRefs.current[name]
        if (section) {
            gsap.to(window, {
                duration: 1.2,
                scrollTo: section.current
            })
        }
    }

    return (
        <ScrollContext.Provider value={{ registerSection, scrollToSection }}>
            {children}
        </ScrollContext.Provider>
    )
}

export default ScrollProvider;