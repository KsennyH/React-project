import './VendorCode.css';

const VendorCode = (props) => {
    return (
        <div className="vendor-code">
            <p className="vendor-code__number">Артикул: {props.info.code}</p>
            <p className="vendor-code__reserve">{props.info.reserve}</p>
        </div>
    )
}

export default VendorCode;