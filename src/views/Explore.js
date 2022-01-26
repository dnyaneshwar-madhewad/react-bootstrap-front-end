import { useEffect, useState } from "react";
import HeaderNavigation from "./HeaderNavigation";

export default function Explore() {
  const [dataList, setDataList] = useState([]);
  const makeApiCall = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    const list = await response.json();

    const newDataList = [...list];
    setDataList(newDataList);
  };

  useEffect(() => {
    makeApiCall();
  }, []);

  return (
    <>
      <HeaderNavigation />

      {false && (
        <input type="button" value="Make Api Call" onClick={makeApiCall} />
      )}

      <div className="row">
        {dataList.map((item, index) => (
          <div key={index} className="col-12 col-md-4">
            <div className="card">
              <div className="card-body">{item.body}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
