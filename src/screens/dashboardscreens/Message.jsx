import React, { useEffect, useState } from "react";
import SMGrid from "../../components/SMGrid";
import SMShowData from "../../components/SMShowData";
import { Get } from "../../config/apibasemethods";
function Message() {
  const [dataFetched, setDataFetched] = useState([]);
  let [objKeys, setObjKeys] = useState([]);
  let [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    Get("comments")
      .then((res) => {
        setLoader(false);
        setDataFetched(res.data);
        setObjKeys(Object.keys(res.data[0]));
        console.log(objKeys);
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
  }, []);

  return (
    <>
      {loader ? (
        <img
          width="40%"
          src="https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
          alt="Loading..."
        />
      ) : (
        <SMShowData keys={objKeys} dataSource={dataFetched} />
      )}
    </>
  );
}
export default Message;
