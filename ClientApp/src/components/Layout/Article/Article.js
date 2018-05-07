import React from "react";
import AddressBookTable from "../../AddressBookTable";

const Article = props => {
  props.log.info("Article component rendered");
  return (
    <article className="App-section">
      <AddressBookTable addressBook={props.addressBook} log={props.log} />
    </article>
  );
};

export default Article;
