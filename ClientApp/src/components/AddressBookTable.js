import React from "react";
import * as Spinner from "react-spinkit";
import { Table } from "reactstrap";

const AddressBookTable =(props)=> (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {props.addressBook &&
            props.addressBook.map((address, key) => (
              <tr key={key}>
                <th scope="row">{key}</th>
                <td>{address.name}</td>
                <td>{address.description}</td>
                <td>{address.location}</td>
              </tr>
            ))}
          {!props.addressBook && <Spinner name="three-bounce" />}
        </tbody>
      </Table>
    );
  
export default AddressBookTable;
