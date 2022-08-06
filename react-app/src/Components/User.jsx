import React from "react";
import NavbarCreation from "./Navbar";

function User(props) {
  const securities = [
    {
      Id: 1,
      ISIN: "abcdefghij12",
      CUSIP: "12345abcd",
      Issuer: "Unknown",
      MaturityDate: "20/08/2022",
      Coupon: "5%",
      Type: "AAA",
      FaceValue: "1000$",
      Status: "Paid",
    },
    {
      Id: 1,
      ISIN: "abcdefghij12",
      CUSIP: "12345abcd",
      Issuer: "Unknown",
      MaturityDate: "20/08/2022",
      Coupon: "5%",
      Type: "AAA",
      FaceValue: "1000$",
      Status: "Paid",
    },
    {
      Id: 1,
      ISIN: "abcdefghij12",
      CUSIP: "12345abcd",
      Issuer: "Unknown",
      MaturityDate: "20/08/2022",
      Coupon: "5%",
      Type: "AAA",
      FaceValue: "1000$",
      Status: "Paid",
    },
    {
      Id: 1,
      ISIN: "abcdefghij12",
      CUSIP: "12345abcd",
      Issuer: "Unknown",
      MaturityDate: "20/08/2022",
      Coupon: "5%",
      Type: "AAA",
      FaceValue: "1000$",
      Status: "Paid",
    },
    {
      Id: 1,
      ISIN: "abcdefghij12",
      CUSIP: "12345abcd",
      Issuer: "Unknown",
      MaturityDate: "20/08/2022",
      Coupon: "5%",
      Type: "AAA",
      FaceValue: "1000$",
      Status: "Paid",
    },
    {
      Id: 1,
      ISIN: "abcdefghij12",
      CUSIP: "12345abcd",
      Issuer: "Unknown",
      MaturityDate: "20/08/2022",
      Coupon: "5%",
      Type: "AAA",
      FaceValue: "1000$",
      Status: "Paid",
    },
    {
      Id: 1,
      ISIN: "abcdefghij12",
      CUSIP: "12345abcd",
      Issuer: "Unknown",
      MaturityDate: "20/08/2022",
      Coupon: "5%",
      Type: "AAA",
      FaceValue: "1000$",
      Status: "Paid",
    },
    {
      Id: 1,
      ISIN: "abcdefghij12",
      CUSIP: "12345abcd",
      Issuer: "Unknown",
      MaturityDate: "20/08/2022",
      Coupon: "5%",
      Type: "AAA",
      FaceValue: "1000$",
      Status: "Paid",
    },
    {
      Id: 1,
      ISIN: "abcdefghij12",
      CUSIP: "12345abcd",
      Issuer: "Unknown",
      MaturityDate: "20/08/2022",
      Coupon: "5%",
      Type: "AAA",
      FaceValue: "1000$",
      Status: "Paid",
    },
    {
      Id: 1,
      ISIN: "abcdefghij12",
      CUSIP: "12345abcd",
      Issuer: "Unknown",
      MaturityDate: "20/08/2022",
      Coupon: "5%",
      Type: "AAA",
      FaceValue: "1000$",
      Status: "Paid",
    },
  ];
  return (
    <div>
      <NavbarCreation name="User Name" />
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>ISIN</th>
              <th>CUSIP</th>
              <th>Issuer</th>
              <th>Maturity Date</th>
              <th>Coupon</th>
              <th>Type</th>
              <th>Face Value</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {securities.map((security) => (
              <tr key={security.Id}>
                <td>{security.Id}</td>
                <td>{security.ISIN}</td>
                <td>{security.CUSIP}</td>
                <td>{security.Issuer}</td>
                <td>{security.MaturityDate}</td>
                <td>{security.Coupon}</td>
                <td>{security.Type}</td>
                <td>{security.FaceValue}</td>
                <td>{security.Status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;
