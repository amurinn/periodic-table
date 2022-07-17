import React, { useState } from 'react';


const Element = (props) => {


    const getElement = () => {
        props.getElementInfo({
            name: props.name,
            symbol: props.symbol,
            atomicNumber: props.atomicNumber,
            groupBlock: props.groupBlock,
            group: props.group,
            standardState: props.standardState,
            atomicMass: props.atomicMass,
            yearDiscovered: props.yearDiscovered,
            density: props.density,
            meltingPoint: props.meltingPoint,
            atomicRadius: props.atomicRadius,
            bondingType: props.bondingType,
        })
    }

    return (
    <div className={`grid-area e${props.atomicNumber} group-${props.group}`}>
        <div className={`element-wrapper`} onClick={getElement}>
            <div className="element-border">
                <div className="element">
                    <div className="symbol">{props.symbol}</div>
                    <div className="name">{props.name}</div>
                    <div className="atomic-number">{props.atomicNumber}</div>
                </div>
            </div>
            <div className="triangle"></div>
        </div>
    </div>
    )
}

export default Element