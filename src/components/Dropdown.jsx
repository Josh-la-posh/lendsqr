export const DropdownForm = () => {
    return (
        <div className="dropdown">
            <div className="dropdown__container">
                <div className="dropdown__container-title">Organization</div>
                <div className="dropdown__container-input"><span>Select <img src="../../images/dropdown-icon.png" /></span></div>
            </div>
            <div className="dropdown__container">
                <div className="dropdown__container-title">Username</div>
                <div className="dropdown__container-input">User</div>
            </div>
            <div className="dropdown__container">
                <div className="dropdown__container-title">Email</div>
                <div className="dropdown__container-input">Email</div>
            </div>
            <div className="dropdown__container">
                <div className="dropdown__container-title">Date</div>
                <div className="dropdown__container-input"><span>Date <img src="../../images/date-icon.png" /></span></div>
            </div>
            <div className="dropdown__container">
                <div className="dropdown__container-title">Phone Number</div>
                <div className="dropdown__container-input">Phone Number</div>
            </div>
            <div className="dropdown__container">
                <div className="dropdown__container-title">Status</div>
                <div className="dropdown__container-input"><span>Select <img src="../../images/dropdown-icon.png" /></span></div>
            </div>
            <div className="dropdown__btn">
                <div className="dropdown__btn-reset btn-2">Reset</div>
                <div className="dropdown__btn-filter btn-2">Filter</div>
            </div>
        </div>
    )
}

export const PopupForm = () => {
    return (
        <div className="popup">
            <div className="popup__container">
                <span><img src="../../images/outer-eye.png" alt=""  style={{width: '15.1px', height: '9.73px'}} /> <img src="../../images/inner-eye.png" alt="" style={{width: '5.98px', height: '5.98px'}} className="img-2" /></span> View Details
            </div>
            <div className="popup__container">
                <img src="../../images/black-user.png" alt="" style={{width: '11px', height: '13.13px'}}/> Blacklist User
            </div>
            <div className="popup__container">
                <img src="../../images/act-user.png" alt="" style={{width: '12.57px', height: '12.59px'}} /> Activate User
            </div>
        </div>
    )
}