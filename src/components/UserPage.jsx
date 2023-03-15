import { Link } from "react-router-dom";

export default function UserPage({ data }) {
  console.log(data);
  return (
    <div className="user__container">
      <div className="user">
        <div className="backButton">
          <Link to="/dashboard">
            <div className="icon">
              <img src="../../images/back-btn.png" alt="" />
            </div>
            <span className="text">Back to Users</span>
          </Link>
        </div>

        <div className="topSection">
          <div className="title">User Details</div>
          <div className="user__btn">
            <div className="blackUser btn">Blacklist user</div>
            <div className="actUser btn">Activate user</div>
          </div>
        </div>

        <div className="user__card">
          <div className="user__card-container">
            <div className="top">
              <div className="user__profile">
                <div className="user__profile-img">
                  <img src={`${data?.profile?.avatar}`} alt="" />
                </div>
                <div className="user__profile-detail">
                  <span>
                    {data?.profile?.firstName} {data?.profile?.lastName}
                  </span>
                  <p>LSQFf587g90</p>
                </div>
              </div>
              <span className="line">
                <img src="../../images/line.png" alt="" />
              </span>
              <div className="user__rank">
                <p>User's Tier</p>
                <span>
                  <img src="../../images/star-1.png" alt="" />
                  <img src="../../images/star-2.png" alt="" />
                  <img src="../../images/star-2.png" alt="" />
                </span>
              </div>
              <span className="line">
                <img src="../../images/line.png" alt="" />
              </span>
              <div className="user__account">
                <span className="amount">N{data?.accountBalance}</span>
                <p>{data?.accountNumber}/Providus Bank</p>
              </div>
            </div>
            <div className="bottom">
              <div className="text active">General Details</div>
              <div className="text">Documents</div>
              <div className="text">Bank Details</div>
              <div className="text">Loans</div>
              <div className="text">Savings</div>
              <div className="text">App and System</div>
            </div>
          </div>
        </div>

        <div className="user__info">
          <div className="user__info-container">
            <div className="heading">Personal Information</div>
            <div className="content">
              <div className="details">
                <div className="sub-heading">Full name</div>
                <div className="detail">
                  {data?.profile?.firstName} {data?.profile?.lastName}
                </div>
              </div>
              <div className="details">
                <div className="sub-heading">Phone number</div>
                <div className="detail">{data?.phoneNumber}</div>
              </div>
              <div className="details">
                <div className="sub-heading">Email address</div>
                <div className="detail">{data?.email}</div>
              </div>
              <div className="details">
                <div className="sub-heading">BVN</div>
                <div className="detail">{data?.profile?.bvn}</div>
              </div>
              <div className="details">
                <div className="sub-heading">Gender</div>
                <div className="detail">{data?.profile?.gender}</div>
              </div>
              <div className="details">
                <div className="sub-heading">Marital status</div>
                <div className="detail">Single</div>
              </div>
              <div className="details">
                <div className="sub-heading">children</div>
                <div className="detail">None</div>
              </div>
              <div className="details">
                <div className="sub-heading">Type of residence</div>
                <div className="detail">Parent's Apartment</div>
              </div>
            </div>
          </div>

          <hr />

          <div className="user__info-container">
            <div className="heading">Education and Eployment</div>
            <div className="content">
              <div className="details">
                <div className="sub-heading">Level of Educatiion</div>
                <div className="detail">{data?.education?.level}</div>
              </div>
              <div className="details">
                <div className="sub-heading">Employment status</div>
                <div className="detail">{data?.education?.employmentStatus}</div>
              </div>
              <div className="details">
                <div className="sub-heading">sector of employment</div>
                <div className="detail">{data?.education?.sector}</div>
              </div>
              <div className="details">
                <div className="sub-heading">duration of employment</div>
                <div className="detail">{data?.education?.duration}</div>
              </div>
              <div className="details">
                <div className="sub-heading">office email</div>
                <div className="detail">{data?.education?.officeEmail}</div>
              </div>
              <div className="details">
                <div className="sub-heading">monthly income</div>
                <div className="detail">N{data?.education?.monthlyIncome[0]} - N{data?.education?.monthlyIncome[1]}</div>
              </div>
              <div className="details">
                <div className="sub-heading">loan repayment</div>
                <div className="detail">{data?.education?.loanRepayment}</div>
              </div>
            </div>
          </div>

          <hr />

          <div className="user__info-container">
            <div className="heading">Socials</div>
            <div className="content">
              <div className="details">
                <div className="sub-heading">twitter</div>
                <div className="detail">{data?.socials?.twitter}</div>
              </div>
              <div className="details">
                <div className="sub-heading">facebook</div>
                <div className="detail">{data?.socials?.facebook}</div>
              </div>
              <div className="details">
                <div className="sub-heading">instagram</div>
                <div className="detail">{data?.socials?.instagram}</div>
              </div>
            </div>
          </div>

          <hr />

          <div className="user__info-container">
            <div className="heading">Guarantor</div>
            <div className="content">
              <div className="details">
                <div className="sub-heading">Full name</div>
                <div className="detail">
                  {data?.guarantor?.firstName} {data?.guarantor?.lastName}
                </div>
              </div>
              <div className="details">
                <div className="sub-heading">Phone number</div>
                <div className="detail">{data?.guarantor?.phoneNumber}</div>
              </div>
              <div className="details">
                <div className="sub-heading">Adress</div>
                <div className="detail">{data?.guarantor?.address}</div>
              </div>
              <div className="details">
                <div className="sub-heading">Gender</div>
                <div className="detail">{data?.guarantor?.gender}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
