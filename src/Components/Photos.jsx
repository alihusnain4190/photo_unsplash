import React from "react";
import SearchPhoto from "./SearchPhoto";

const Photos = ({ data, searchData }) => {
  console.log(data);
  return (
    <main>
      <div>
        <SearchPhoto searchData={searchData} />
      </div>

      <section className="photo">
        {data.map((value) => {
          return (
            <div className="img__wrapper" key={value.id}>
              <img src={value.urls.full} className="img" />;
              <div className="info">
                <h3>{value.user.name}</h3>
                <p>{value.user.total_likes}</p>

                <a href={value.portfolio_url}>user</a>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Photos;
