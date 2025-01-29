import { useState,useEffect,useRef} from "react";
/**
 * React component that represents a scrollable vertical side bar with a list of labels/options. An example can be pictured as a timeline.
 * @param {*} props Object with properties in the scrollable bar, that must include: list of labels(options),class list (className), content page reference (contentRef)
 * @returns React component
 */
export default function ScrollBar({props = {}}){
    const {options,contentRef,standardizedoptions,...restProps} = props;

    const ops= [...options];
    const [scrollLabel, setScrollLabel] = useState(null);
    const optionsListRef = useRef(null);


    
    /**
     * Function to check which option in the option list aka section is within the viewport, returning its index
     * @returns Index of the element in the list of options/labels
     */
    const checkSection = ()=>{
        let index = 0;
        props.standardizedoptions.forEach((sectionLabel,i)=>{
            const section = document.getElementById(sectionLabel);

            let thisScrollBar = null;
            let offset = null;
            //Case the scrollbar is located at the top add some offset for the scrolling check
            if(props.className.includes("top")){
                thisScrollBar = document.getElementsByClassName(props.className)[0];
                offset = thisScrollBar.offsetHeight?thisScrollBar.offsetHeight:0;
            }
    
            
            if(section){
                if(window.scrollY+offset>=section.offsetTop){
                    index= i;
                }
            }
        })
        return index;
    }
    //Adjusts the highlighted list item with the scroll of the content page
    const scrollHandler = ()=>{
        //I need to change the scroll to work with the window instead.
        //THIS IS TEMPORARY SOLUTION FOR WHEN I HAVE SECTIONS DEFINED
        const labelScrolledIndex = checkSection();
        const labelScrolled = ops[labelScrolledIndex];
        const standardizedCurrLabel = standardizeLabel(labelScrolled);
        const standardizedLastLabel = standardizeLabel(scrollLabel);

        // If label changed aka section changed
        if (labelScrolled !== scrollLabel) {
        const prevLabel = optionsListRef.current.querySelector(`#${standardizedLastLabel}`);
        if (prevLabel) {
            prevLabel.classList.remove("selected-white");
        }
        const selectedLabel = optionsListRef.current.querySelector(`#${standardizedCurrLabel}`);
        //console.log("section checked:", options[labelScrolledIndex]," ",selectedLabel)

        if (selectedLabel) {
            selectedLabel.classList.add("selected-white");
            selectedLabel.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
            });
        }
        setScrollLabel(labelScrolled);
        }
    };
    const standardizeLabel = (label)=>{
        if(!label) return null;
        return "scrollbar"+label.split(" ").join("");
    }
    
    function clickHandler(index){
        const sectionLabelID = standardizedoptions[index];
        const section = document.getElementById(sectionLabelID);
        let thisScrollBar = null;
        let offset = null;
        //Case the scrollbar is located at the top add some offset for the scrolling check
        if(props.className.includes("top")){
            thisScrollBar = document.getElementsByClassName(props.className)[0];
            offset = thisScrollBar.offsetHeight?thisScrollBar.offsetHeight:0;
        }     
        if(section){
            console.log("Section clicked:",section)
            window.scrollTo({behavior:"smooth",top:section.offsetTop});
        }
    }
    useEffect(()=>{
        
        window.addEventListener("scroll",scrollHandler);
        return ()=>{
            window.removeEventListener("scroll",scrollHandler);
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
                    <li key={index} id={standardizeLabel(label)} className="scrollable-bar-items" onClick={()=>clickHandler(index)} style={{marginLeft:"40px",marginRight:"40px"}}>
                        {label}
                    </li>
                )
            })}
        </ul>
    )
}