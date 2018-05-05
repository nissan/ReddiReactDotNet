import React from "react";
import AddressBookTable from "../../AddressBookTable";

const Article = (props) => (
  <article className="App-section">
    <AddressBookTable addressBook={props.addressBook} />
  </article>
);

export default Article;