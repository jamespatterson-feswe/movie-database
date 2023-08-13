import React from "react";
import './header-footer.scss'

function HeaderFooter({ params }): React.JSX.Element {
  const isHeader = !!params.header;

  return (
    <section className={`toolbar ${isHeader ? 'header' : 'footer'}`}>
      {isHeader ? 'Header' : '® xRzy'}
    </section>
  );
}

export default HeaderFooter;
