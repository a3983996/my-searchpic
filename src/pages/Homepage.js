import React, { useState, useEffect } from "react";
import Picture from "../components/Picture";
import Search from "../components/Search";
import { v4 as uuidv4 } from "uuid";

const Homepage = () => {
  let [input, setInput] = useState("");
  let [target, setTarget] = useState("");
  let [data, setData] = useState([]);
  let [page, setPage] = useState(1);
  const auth = "563492ad6f917000010000010c1cd66275e44e3181d0a33ddfb7a781";
  const intailUrl = `https://api.pexels.com/v1/curated?page=${page}&per_page=15`;
  const queryUrl = `https://api.pexels.com/v1/search?query=${target}&per_page=15&page=${page}`;

  const search = async (url) => {
    let dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: auth,
      },
    });
    let parsedData = await dataFetch.json();
    setData(parsedData.photos);
  };
  const loadmore = async (url) => {
    let dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: auth,
      },
    });
    let parsedData = await dataFetch.json();
    setData(data.concat(parsedData.photos));
  };

  useEffect(() => {
    setPage(1);
    if (target === "") {
      search(intailUrl);
    } else {
      search(queryUrl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);
  useEffect(() => {
    if (page !== 1) {
      if (target === "") {
        loadmore(intailUrl);
      } else {
        loadmore(queryUrl);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          setTarget(input);
        }}
        input={input}
        setInput={setInput}
      />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} key={uuidv4()} />;
          })}
      </div>
      <div className="loadMore">
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          載入更多
        </button>
      </div>
    </div>
  );
};

export default Homepage;
