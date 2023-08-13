import React from "react";

function HeaderFooter({ props }) {
  const type = !!props.header ? 'Header' : 'Footer';
  return (
    <section>
      {type}
    </section>
  );
}

export default HeaderFooter;
