import React from "react";
import './header-footer.scss'

function HeaderFooter({ props }): React.JSX.Element {
  const type = !!props.header ? 'Header' : 'Footer';
  return (
    <section className="toolbar">
      {type}
    </section>
  );
}

export default HeaderFooter;
