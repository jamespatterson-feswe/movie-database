import React, { useEffect, useRef, useState } from "react";
import btn from "../../assets/menu-btn.png";
import "./header-footer.scss";

function HeaderFooter({ params }): React.JSX.Element {
  const isHeader = !!params.header;

  const headingRef = useRef(null);
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    if (isHeader && !checked) {
      (headingRef?.current as any)?.focus();
      setChecked(true);
    }
  }, [isHeader, checked]);

  return (
    <>
      <section className="flexed tool">
        <div className={`${isHeader ? "menu-btn-container" : ""}`}>
          {isHeader ? (
            <img
              className={`${isHeader ? "flexed " : ""}btn`}
              src={btn}
              alt="a menu button"
            />
          ) : (
            ""
          )}
        </div>
        <div className={`flexed ${isHeader ? "bar header" : "footer"}`}>
          {isHeader ? (
            <>
              <h1 className="heading-1" ref={headingRef}>Movie Database</h1>
            </>
          ) : (
            "® xRzy"
          )}
        </div>
      </section>
    </>
  );
}

export default HeaderFooter;
