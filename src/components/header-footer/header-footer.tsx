import React from "react";

function HeaderFooter({ props }) {
  return (
    <section>
      {
        !!props.header && 'Header'
      }
      {
        !props.header && 'Footer'
      }
    </section>
  );
}

export default HeaderFooter;
