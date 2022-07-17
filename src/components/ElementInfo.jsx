
const ElementInfo = (props) => {
    return (
        <div className={`element-info group-${props.info.group}`}>
            <div className="col col-1">
                <div className="element">
                    <div className="symbol">{props.info.symbol}</div>
                    <div className="name">{props.info.name}</div>
                    <div className="atomic-number">{props.info.atomicNumber}</div>
                </div>
            </div>
            <div className="col col-2">
                <ul>
                    <li>Group: {props.info.groupBlock}</li>
                    <li>State at °C: {props.info.standardState}</li>
                    <li>Atomic mass: {props.info.atomicMass}</li>
                    <li>Year discovered: {props.info.yearDiscovered}</li>
                </ul>
            </div>
            <div className="col col-3">
                <ul>
                    <li>Density: {props.info.density}</li>
                    <li>Melting point: {props.info.meltingPoint}</li>
                    <li>Atomic radius: {props.info.atomicRadius}</li>
                    <li>Bonding type: {props.info.bondingType}</li>
                </ul>
            </div>
        </div>
    )
}

export default ElementInfo