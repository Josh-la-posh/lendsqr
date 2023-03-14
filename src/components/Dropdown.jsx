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
                <span><img src="../../images/outer-eye.png" alt="" /> <img src="../../images/inner-eye.png" alt="" /></span><img src="../../images/user.png" alt="" /> View Details
            </div>
            <div className="popup__container">
                <img src="../../images/black-user.png" alt="" /> Blacklist User
            </div>
            <div className="popup__container">
                <img src="../../images/act-user.png" alt="" /> Activate User
            </div>
        </div>
    )
}