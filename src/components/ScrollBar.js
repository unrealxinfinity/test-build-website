import { useState,useEffect,useRef} from "react";
/**
 * React component that represents a scrollable vertical side bar with a list of labels/options. An example can be pictured as a timeline.
 * @param {*} options List of labels in the scrollable bar 
 * @returns React component
 */
export default function ScrollBar({props = {}}){
    const {options,contentRef,...restProps} = props;

    const ops= [...options];
    const [scrollLabel, setScrollLabel] = useState(null);
    const scrollableContainerRef = contentRef;
    const optionsListRef = useRef(null);


    
    /**
     * Function to check which option in the option list is selected, returning its index
     * @param {*} ops List of labels in the scrollable bar
     * @param {*} currPercentage Current scrolled percentage, being max 100%
     * @returns Index of the element in the list of options/labels
     * @throws Error that the scroll was out of the bound (I assume that never happens)
     */
    const checkSection = (ops,currPercentage)=>{
        const opsLen = ops.length;
        const sectionRange = Math.round(100/opsLen);
        const index = Math.floor(currPercentage / sectionRange);
        if (index < 0) {
            return 0;
        }
        else if(index >=opsLen){
            return opsLen-1;
        }
        return index;
    }
    //Adjusts the highlighted list item with the scroll of the content page
    const scrollHandler = ()=>{
        if (scrollableContainerRef.current){
            const { scrollTop, scrollHeight, clientHeight } = scrollableContainerRef.current;
            const totalScrollableHeight = scrollHeight-clientHeight;
            
            const scrolled = (scrollTop / totalScrollableHeight) * 100;
            let labelScrolledIndex = null;
            let labelScrolled = null;
            //Check the section 
            try{
                labelScrolledIndex = checkSection(ops,scrolled);
            }
            catch (error){
                console.warn(error.message);
                alert(error.message);
            }
            labelScrolled = ops[labelScrolledIndex];
            const standardizedCurrLabel = standardizeLabel(labelScrolled);
            const standardizedLastLabel = standardizeLabel(scrollLabel);
                //If label changed aka section changed
                if(labelScrolled!==scrollLabel){
                    const prevLabel = optionsListRef.current.querySelector(`#${standardizedLastLabel}`);
                    if(prevLabel){
                        prevLabel.classList.remove("selected");
                    }
                    const selectedLabel = optionsListRef.current.querySelector(`#${standardizedCurrLabel}`);
                    if(selectedLabel){
                        selectedLabel.classList.add("selected");
                    }
                    selectedLabel.scrollIntoView(
                        {
                            behavior: 'smooth',
                            block: 'center',
                            inline: 'center'
                        }
                    )
                    setScrollLabel(labelScrolled);

                }
            
            
        }
    };
    const standardizeLabel = (label)=>{
        if(!label) return null;
        return "scrollbar"+label.split(" ").join("");
    }
    useEffect(()=>{
        const container = scrollableContainerRef.current
        container.addEventListener("scroll",scrollHandler);
        return ()=>{
            container.removeEventListener("scroll",scrollHandler);
        }
    });

    if(!options){
        alert("Necessary options propertie for the scrollBar");
        return <></>
    };


    return(
        <ul ref={optionsListRef} {...restProps}>
            {ops.map((label,index)=>{
                return(
                    <li key={index} id={standardizeLabel(label)} className="scrollable-bar-items" style={{marginLeft:"40px",marginRight:"40px"}}>
                        {label}
                    </li>
                )
            })}
        </ul>
    )
}