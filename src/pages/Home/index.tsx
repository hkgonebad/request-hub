import React from "react";

const Home = () => {
  return (
    <>
      <section className="block blockTitle">
        <div className="container">
          {/* Block Header */}
          <div className="blockHeader">
            <div className="bhTitle">
              {/* <Breadcrumbs bc={null} isActive={false} /> */}

              <h2>Home</h2>
            </div>

            {/* Search */}
            {/* <FormSearch /> */}
          </div>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <p>Homepage Content</p>
        </div>
      </section>
    </>
  );
};

export default Home;
