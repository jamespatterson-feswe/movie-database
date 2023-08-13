import React from "react";
import btn from '../../assets/menu-btn.png';
import './header-footer.scss'

function HeaderFooter({ params }): React.JSX.Element {
  const isHeader = !!params.header;

  return (
    <>
      <section className="flexed tool">
        <div className={ `${isHeader ? 'menu-btn-container' : ''}` }>
          { isHeader ? <img className={ `${ isHeader ? 'flexed ' : '' }btn` } src={btn} alt="a menu button" /> : '' }
        </div>
        <div className={`flexed ${isHeader ? 'bar header' : 'footer'}`}>
          {isHeader ? <><h1>Movie Database</h1></> : '® xRzy'}
        </div>
      </section>
    </>
  );
}

export default HeaderFooter;
