import logo from "../../assets/images/mono-logo-white.svg";
import stats from "../../assets/images/Stats.png";
import profile from "../../assets/images/Profile.png";
import calendar from "../../assets/images/calendar.png";
import morebtn from "../../assets/images/morebtn.svg";
import food from "../../assets/images/food.svg";
import uber from "../../assets/images/uber.png";
import house from "../../assets/images/house.png";
import netflix from "../../assets/images/netflix.png";
import eden from "../../assets/images/eden.png";
import linkedaccount from "../../assets/images/linked-account.png";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import MonoConnect from "@mono.co/connect.js";
import ProgressBar from "@ramonak/react-progress-bar";
import { getuser } from "../../lib/apiHandlers";
import loadError from "../../lib/loadErr";
import { toast } from "react-toastify";

interface TransactionInterface {
  name: string;
  timestamp: string;
  amount: string;
  icon: string;
}

interface RecordsInterface {
  name: string;
  amount: string;
  progress: number;
}

export function Dashboard() {
  // const classes = useStyle();
  const transactions: TransactionInterface[] = [
    {
      name: "Jumia Food",
      timestamp: "11-11-2021 • 10:12 am • Credit",
      amount: "-10800",
      icon: food,
    },
    {
      name: "Uber VIA Flutterwave",
      timestamp: "10-11-2021 • 8:12 pm  •  Credit",
      amount: "-15000",
      icon: uber,
    },
    {
      name: "House Rent VIA Paystack",
      timestamp: "10-11-2021 • 6:10 pm  •  Credit",
      amount: "-185750",
      icon: house,
    },
    {
      name: "Our Eden life Subcription",
      timestamp: "10-11-2021 • 5:40 pm  •  Credit",
      amount: "-56000",
      icon: eden,
    },
    {
      name: "Netflix subcription",
      timestamp: " 10-11- 2021 • 5:12 pm  •  Debit",
      amount: "-35200",
      icon: netflix,
    },
  ];

  const finanialRecords: RecordsInterface[] = [
    {
      name: "Food and Drinks",
      amount: "872,400",
      progress: 35,
    },
    {
      name: "Shopping",
      amount: "1,378,200",
      progress: 50,
    },
    {
      name: "Housing",
      amount: "928,500",
      progress: 40,
    },
    {
      name: "Transportation",
      amount: "420,700",
      progress: 30,
    },
  ];

  // const monoConnect = React.useMemo(() => {
  //   const monoInstance = new MonoConnect({
  //     onClose: () => console.log("Widget closed"),
  //     onLoad: () => console.log("Widget loaded successfully"),
  //     onSuccess: ({ code }) => console.log(`Linked successfully: ${code}`),
  //     key: "test_pk_GA9IVgMYFaG3snIitoZu",
  //   });

  //   monoInstance.setup();

  //   return monoInstance;
  // }, []);

  const token = JSON.parse(localStorage.getItem("@user-token") || "null");
  const user = JSON.parse(localStorage.getItem("@user-user") || "null");
  const navigate = useNavigate();
  getuser()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      loadError(err);
      console.log(err);
    });
  useEffect(() => {
    if (!token) {
      toast("Pls login");
      navigate("/login");
    }
    if (!user?.linked_account) {
      navigate("/link-account");
    }
  }, token);
  return (
    <div className="dashboard-sidebar-wrapper flex flex-no-wrap h-screen">
      {/* Sidebar starts */}
      {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
      <div className="w-64 h-full absolute sm:relative bg-black shadow md:h-full flex-col justify-between hidden sm:flex">
        <div className="px-8">
          <div className="w-full h-full mx-10">
            <div className="mt-10">
              <img className="" src={logo} alt="" />
            </div>
            <div className="navigations mt-20">
              <p className="active">Dashboard</p>
              <p>Expenses</p>
              <p>Wallets</p>
              <p>Summary</p>
              <p>Accounts</p>
              <p>Settings</p>
            </div>
          </div>
        </div>
      </div>
      {/* Sidebar ends */}
      {/* Remove class [ h-64 ] when adding a card block */}
      <div className="container md:w-5/5 w-12/12 h-full">
        {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
        <div className="flex h-full">
          <div className="dashboard-wrapper w-full h-full">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-4 h-full">
              <div className="col-span-7">
                <div className="transactions p-5 md:p-10">
                  <div className="flex justify-between align-center">
                    <div className="profileImage flex align-center gap-4">
                      <img src={profile} alt="" />
                      <p>Good Morning, Ola</p>
                    </div>
                    <div className="date flex align-center items-center px-4 gap-2">
                      <p>Today</p>
                      <img src={calendar} alt="" />
                    </div>
                  </div>
                  {/* Expense Tracker */}
                  <div className="expenses">
                    <div className="mt-5">
                      <h3 className="text-center">Expense Tracker</h3>
                      <img className="mt-10 w-full" src={stats} alt="" />
                    </div>
                  </div>
                  {/* Transactions */}
                  <div className="list-transactions mt-14">
                    <div className="lt-header flex justify-between items-center py-3 ">
                      <h3>Latest Transactions</h3>
                      <img src={morebtn} alt="" />
                    </div>
                    <div className="lt-lists">
                      {transactions &&
                        transactions.length > 0 &&
                        transactions.map((data, index) => (
                          <div
                            key={index}
                            className="lt-list-item my-10 flex justify-between items-center"
                          >
                            <div className="flex gap-4">
                              <img src={data.icon} alt="" />
                              <div className="grid grid-cols-1">
                                <p>
                                  <b>{data.name}</b>
                                </p>
                                <p className="timestamp">{data.timestamp}</p>
                              </div>
                            </div>
                            <div>
                              <p>
                                <b>{data.amount}</b>
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                    <div>
                      <p className="text-center view-all">View All</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-5">
                <div className="w-full h-full panel-2 p-5 md:p-10">
                  <div className="account-card p-10 items-center text-center align-center w-full">
                    <h4 className="total-balance my-3">TOTAL BALANCE</h4>
                    <h4 className="total-amount my-3">30,000,000</h4>
                    <h4 className="total-description my-3">
                      Your balance across all Banks
                    </h4>
                    <img
                      className="w-32 my-10 mx-auto"
                      src={linkedaccount}
                      alt=""
                    />
                    <button className="account-btn py-5 px-10 mt-10">
                      Unlink Bank Account
                    </button>
                  </div>
                  {/* Transactions */}
                  <div className="list-transactions mt-14">
                    <div className="lt-header flex justify-between items-center py-3 ">
                      <h3>Why your money go?</h3>
                      <img src={morebtn} alt="" />
                    </div>
                    <div className="lt-lists">
                      {finanialRecords &&
                        finanialRecords.length > 0 &&
                        finanialRecords.map((data, index) => (
                          <div
                            key={index}
                            className="lt-list-item my-10 items-center"
                          >
                            <div className="flex justify-between gap-4 w-full">
                              <div>
                                <p>
                                  <b>{data?.name}</b>
                                </p>
                              </div>
                              <div>
                                <p className="timestamp">{data.amount}</p>
                              </div>
                            </div>
                            <div className="my-5">
                              <ProgressBar
                                height="10px"
                                animateOnRender={true}
                                isLabelVisible={false}
                                completed={data.progress}
                                bgColor={"#FFB1B1"}
                              />
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
