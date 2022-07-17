import axios from "axios"
import React, {useState, useEffect} from "react";
import Element from "./Element"
import ElementInfo from "./ElementInfo";


const baseURL = "https://periodic-table-elements-info.herokuapp.com/elements"

const Table = () => {

    const [elements, setElements] = useState(null)
    const [elementInfo, getElementInfo] = useState({})
    

    useEffect(() =>{
        axios.get(baseURL).then((response) => {
            setElements(response.data)
        })
    },[])

    if (!elements) return null;

    const getElementInfoHandler = (info) => {
        getElementInfo(info)
    }

    return (
        <>
        {Object.keys(elementInfo).length !== 0 && <ElementInfo info={elementInfo} />}
        <div className="table">
            {Object.values(elements).map((elem, index) => {
                return (
                    <Element key={index} {...elem} getElementInfo={getElementInfoHandler}/>
                )
            })}
        </div>
        </>
    )
}

export default Table