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
              <img src={value.urls.full} className="img" />
              <div className="info__overlay">
                <div>
                  <h3>{value.user.name}</h3>
                  <p>{value.user.total_likes}</p>
                </div>
                <div>
                  <a href={value.user.portfolio_url}>
                    <img
                      src={value.user.profile_image.medium}
                      alt=""
                      className="user-img"
                    />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Photos;
