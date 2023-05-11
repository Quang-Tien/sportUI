import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import DistanceSlider from "../components/DistanceSlider.tsx";

function List() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <div className="topStaduims pb-4">
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-4 col-md-5">
              <div className="d-none d-md-block">
                <h3 className="text-center">
                  <img
                    className="me-2"
                    src="https://malaebapp.com/images/point.png"
                    alt="img"
                  />{" "}
                  <span className="border-bottom text-uppercase">Bộ lọc</span>{" "}
                  <img
                    className="ms-2"
                    src="https://malaebapp.com/images/point.png"
                    alt="img"
                  />
                </h3>
              </div>
              <p className="mt-2 mb-1 fw-bold">Ngày</p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  minDate={new Date()}
                  maxDate={new Date().setDate(new Date().getDate() + 7)}
                  inline
                  calendarClassName="custom-calendar" // add a custom CSS class to the calendar container
                  className="custom-datepicker" // add a custom CSS class to the date-picker container
                  dayClassName={(date) =>
                    date.getTime() === startDate.getTime()
                      ? "custom-selected"
                      : undefined
                  } // add a custom CSS class to the selected date element
                  showMonthYearPicker={false} // disable month and year picker
                />
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <p className="mt-2 mb-1 fw-bold">Thời gian</p>
                    <select className="form-control text-uppercase">
                      <option>Chọn khung giờ</option>
                    </select>
                  </div>
                </div>
              </div>
              <p className="fw-bold mt-4 mb-1">Môn thể thao</p>
              <div
                className="row pb-4 btnSlot d-md-flex d-none sports_icons"
                dir="ltr"
              >
                <div className="col-4 p-2" title="All Sports">
                  <input
                    type="radio"
                    className="btn-check"
                    name="options-outlined"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-success w-100 active"
                    htmlFor="success-outlined"
                  >
                    <img
                      src="https://malaebapp.com/images/sports/0.png"
                      width="40"
                      alt="img"
                    />
                  </label>
                </div>
                <div className="col-4 p-2" title="Football">
                  <input
                    type="radio"
                    className="btn-check"
                    name="options-outlined"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-success w-100 "
                    htmlFor="success-outlined"
                  >
                    <img
                      src="https://malaebapp.com/images/sports/1.png"
                      width="40"
                      alt="img"
                    />
                  </label>
                </div>
                <div className="col-4 p-2" title="Basketball">
                  <input
                    type="radio"
                    className="btn-check"
                    name="options-outlined"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-success w-100 "
                    htmlFor="success-outlined"
                  >
                    <img
                      src="https://malaebapp.com/images/sports/2.png"
                      width="40"
                      alt="img"
                    />
                  </label>
                </div>
                <div className="col-4 p-2" title="Padel">
                  <input
                    type="radio"
                    className="btn-check"
                    name="options-outlined"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-success w-100 "
                    htmlFor="success-outlined"
                  >
                    <img
                      src="https://malaebapp.com/images/sports/3.png"
                      width="40"
                      alt="img"
                    />
                  </label>
                </div>
                <div className="col-4 p-2" title="Volleyball">
                  <input
                    type="radio"
                    className="btn-check"
                    name="options-outlined"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-success w-100 "
                    htmlFor="success-outlined"
                  >
                    <img
                      src="https://malaebapp.com/images/sports/4.png"
                      width="40"
                      alt="img"
                    />
                  </label>
                </div>
                <div className="col-4 p-2" title="Futsal">
                  <input
                    type="radio"
                    className="btn-check"
                    name="options-outlined"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-success w-100 "
                    htmlFor="success-outlined"
                  >
                    <img
                      src="https://malaebapp.com/images/sports/8.png"
                      width="40"
                      alt="img"
                    />
                  </label>
                </div>
                <p className="pt-3 mb-1 fw-bold">Thời lượng</p>
                <div className="row pb-4 btnSlot d-md-flex d-none" dir="ltr">
                  <div className="col-4">
                    <input
                      type="radio"
                      className="btn-check"
                      name="options-outlined"
                      autoComplete="off"
                    />
                    <label
                      className="btn btn-outline-success w-100 "
                      htmlFor="success-outlined"
                    >
                      60 phút
                    </label>
                  </div>
                  <div className="col-4">
                    <input
                      type="radio"
                      className="btn-check"
                      name="options-outlined"
                      autoComplete="off"
                    />
                    <label
                      className="btn btn-outline-success w-100 "
                      htmlFor="success-outlined2"
                    >
                      90 phút
                    </label>
                  </div>
                  <div className="col-4">
                    <input
                      type="radio"
                      className="btn-check"
                      name="options-outlined"
                      autoComplete="off"
                    />
                    <label
                      className="btn btn-outline-success w-100 "
                      htmlFor="success-outlined3"
                    >
                      120 phút
                    </label>
                  </div>
                  <p className="pt-3 mb-1 fw-bold">Loại sân</p>
                  <div className="row">
                    <div className="col-4">
                      <input
                        type="checkbox"
                        className="btn-check"
                        name="options-outlined"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-outline-success w-100 "
                        htmlFor="success-outlined1"
                      >
                        5 V 5
                      </label>
                    </div>
                    <div className="col-4">
                      <input
                        type="checkbox"
                        className="btn-check"
                        name="options-outlined"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-outline-success w-100 "
                        htmlFor="success-outlined2"
                      >
                        6 V 6
                      </label>
                    </div>
                    <div className="col-4">
                      <input
                        type="checkbox"
                        className="btn-check"
                        name="options-outlined"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-outline-success w-100 "
                        htmlFor="success-outlined3"
                      >
                        7 V 7
                      </label>
                    </div>
                    <div className="col-4 mt-2">
                      <input
                        type="checkbox"
                        className="btn-check"
                        name="options-outlined"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-outline-success w-100 "
                        htmlFor="success-outlined4"
                      >
                        8 V 8
                      </label>
                    </div>
                    <div className="col-4 mt-2">
                      <input
                        type="checkbox"
                        className="btn-check"
                        name="options-outlined"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-outline-success w-100 "
                        htmlFor="success-outlined5"
                      >
                        9 V 9
                      </label>
                    </div>
                    <div className="col-4 mt-2">
                      <input
                        type="checkbox"
                        className="btn-check"
                        name="options-outlined"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-outline-success w-100 "
                        htmlFor="success-outlined6"
                      >
                        11 V 11
                      </label>
                    </div>
                    <DistanceSlider />
                  </div>
                  <div className="row mt-4">
                    <button className="btn btn-outline-dark btn-lg col mx-1">
                      Xóa
                    </button>
                    <button className="btn btn-success btn-lg col mx-1">
                      Lọc
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-7 d-none d-md-block">
              <a className="card mb-4 cardList d-none d-md-flex" href="/san-bong-thien-tan">
                <div className="row g-0">
                  <div className="col-md-4 position-relative">
                    <img
                      src="https://cdn.malaebapp.com/images/stadium/78/small"
                      className="card-img-top"
                      alt="null"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5>
                        Sân bóng Thiện Nhân
                        <span className="float-end stars flex flex-col justify-center items-center">
                          <span>
                            <FontAwesomeIcon icon={faStar} color="#f0803c" />{" "}
                            4.3/5
                          </span>
                          <div>
                            <small className="text-muted text-sm text-center w-full">
                              3 đánh giá
                            </small>
                          </div>
                        </span>
                      </h5>
                      <p>
                        <small title="Bahrain, Riffa - Southern Governorate">
                          206 Vườn Lài, An Phú Đông, Quận 12
                        </small>
                        <small className="badge badge-dark label-dark mx-1 p-1 text-black-50">
                          13 KM Away
                        </small>
                      </p>
                      <div className="flex flex-row justify-between">
                        <h6 className="d-none d-md-block">
                          2 sân
                          <span className="badge text-dark border mx-1 p-0 px-1 p-1">
                            <img
                              src="https://malaebapp.com/images/sports/1.png"
                              width="20"
                              alt="img"
                            />{" "}
                            5 v 5
                          </span>
                          <span className="badge text-dark border mx-1 p-0 px-1 p-1">
                            <img
                              src="https://malaebapp.com/images/sports/1.png"
                              width="20"
                              alt="img"
                            />{" "}
                            7 v 7
                          </span>
                        </h6>
                        <i>
                          Giá: 200.000đ - 300.000đ
                        </i>
                      </div>
                      <button className="book-now">Đặt ngay</button>
                    </div>
                  </div>
                </div>
              </a>
              <a className="card mb-4 cardList d-none d-md-flex" href="/san-bong-thien-tan">
                <div className="row g-0">
                  <div className="col-md-4 position-relative">
                    <img
                      src="https://top10tphcm.com/wp-content/uploads/2020/12/san-bong-da-o-quan-12.jpg"
                      className="card-img-top"
                      alt="null"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5>
                        Sân bóng đá Lan Anh
                        <span className="float-end stars flex flex-col justify-center items-center">
                          <span>
                            <FontAwesomeIcon icon={faStar} color="#f0803c" />{" "}
                            3.3/5
                          </span>
                          <div>
                            <small className="text-muted text-sm text-center w-full">
                              12 đánh giá
                            </small>
                          </div>
                        </span>
                      </h5>
                      <p>
                        <small title="Bahrain, Riffa - Southern Governorate">
                          70 Đường Tân Thới Nhất 02, Tân Thới Nhất, Quận 12, TPHCM
                        </small>
                        <small className="badge badge-dark label-dark mx-1 p-1 text-black-50">
                          15 KM Away
                        </small>
                      </p>
                      <div className="flex flex-row justify-between">
                        <h6 className="d-none d-md-block">
                          2 sân
                          <span className="badge text-dark border mx-1 p-0 px-1 p-1">
                            <img
                              src="https://malaebapp.com/images/sports/1.png"
                              width="20"
                              alt="img"
                            />{" "}
                            5 v 5
                          </span>
                          <span className="badge text-dark border mx-1 p-0 px-1 p-1">
                            <img
                              src="https://malaebapp.com/images/sports/1.png"
                              width="20"
                              alt="img"
                            />{" "}
                            7 v 7
                          </span>
                        </h6>
                        <i>
                          Giá: 200.000đ - 300.000đ
                        </i>
                      </div>
                      <button className="book-now">Đặt ngay</button>
                    </div>
                  </div>
                </div>
              </a>
              <a className="card mb-4 cardList d-none d-md-flex" href="/san-bong-thien-tan">
                <div className="row g-0">
                  <div className="col-md-4 position-relative">
                    <img
                      src="https://top10tphcm.com/wp-content/uploads/2020/12/san-bong-da-minh-tri-2.jpg"
                      className="card-img-top"
                      alt="null"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5>
                        Sân bóng đá Minh Trí
                        <span className="float-end stars flex flex-col justify-center items-center">
                          <span>
                            <FontAwesomeIcon icon={faStar} color="#f0803c" />{" "}
                            4.7/5
                          </span>
                          <div>
                            <small className="text-muted text-sm text-center w-full">
                              21 đánh giá
                            </small>
                          </div>
                        </span>
                      </h5>
                      <p>
                        <small title="Bahrain, Riffa - Southern Governorate">
                        Đông Hưng Thuận 11, Đông Hưng Thuận, Quận 12, TPHCM
                        </small>
                        <small className="badge badge-dark label-dark mx-1 p-1 text-black-50">
                          11 KM Away
                        </small>
                      </p>
                      <div className="flex flex-row justify-between">
                        <h6 className="d-none d-md-block">
                          2 sân
                          <span className="badge text-dark border mx-1 p-0 px-1 p-1">
                            <img
                              src="https://malaebapp.com/images/sports/1.png"
                              width="20"
                              alt="img"
                            />{" "}
                            5 v 5
                          </span>
                          <span className="badge text-dark border mx-1 p-0 px-1 p-1">
                            <img
                              src="https://malaebapp.com/images/sports/1.png"
                              width="20"
                              alt="img"
                            />{" "}
                            7 v 7
                          </span>
                        </h6>
                        <i>
                          Giá: 200.000đ - 300.000đ
                        </i>
                      </div>
                      <button className="book-now">Đặt ngay</button>
                    </div>
                  </div>
                </div>
              </a>
              <a className="card mb-4 cardList d-none d-md-flex" href="/san-bong-thien-tan">
                <div className="row g-0">
                  <div className="col-md-4 position-relative">
                    <img
                      src="https://top10tphcm.com/wp-content/uploads/2020/12/san-bong-da-nguyen-gia.jpg"
                      className="card-img-top"
                      alt="null"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5>
                        Sân bóng Nguyễn Gia
                        <span className="float-end stars flex flex-col justify-center items-center">
                          <span>
                            <FontAwesomeIcon icon={faStar} color="#f0803c" />{" "}
                            2.3/5
                          </span>
                          <div>
                            <small className="text-muted text-sm text-center w-full">
                              1 đánh giá
                            </small>
                          </div>
                        </span>
                      </h5>
                      <p>
                        <small title="Bahrain, Riffa - Southern Governorate">
                        961, Nguyễn Ảnh Thủ, Phường Tân Chánh Hiệp, Quận 12, TPHCM
                        </small>
                        <small className="badge badge-dark label-dark mx-1 p-1 text-black-50">
                          6 KM Away
                        </small>
                      </p>
                      <div className="flex flex-row justify-between">
                        <h6 className="d-none d-md-block">
                          2 sân
                          <span className="badge text-dark border mx-1 p-0 px-1 p-1">
                            <img
                              src="https://malaebapp.com/images/sports/1.png"
                              width="20"
                              alt="img"
                            />{" "}
                            5 v 5
                          </span>
                          <span className="badge text-dark border mx-1 p-0 px-1 p-1">
                            <img
                              src="https://malaebapp.com/images/sports/1.png"
                              width="20"
                              alt="img"
                            />{" "}
                            7 v 7
                          </span>
                        </h6>
                        <i>
                          Giá: 200.000đ - 300.000đ
                        </i>
                      </div>
                      <button className="book-now">Đặt ngay</button>
                    </div>
                  </div>
                </div>
              </a>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
