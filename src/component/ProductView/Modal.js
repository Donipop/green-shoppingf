import React from "react";
import "./Modalcss.css";

const ReviewUpdate = (props) => {
    const {close, header, check} = props;
    return (
        <div className={check ? 'openModal modal' : 'modal'}>
      {check ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>{props.children}</main>
          <footer>
            <button className="close" onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );

}

export default ReviewUpdate