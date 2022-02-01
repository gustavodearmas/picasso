import React from "react";
import Modal from "../../components/modal/modal";

const Borrar = () => {
  return (
    <Modal>
      <h2>Phone numbers</h2>
      <div class="rTable">
        <div class="rTableRow">
          <div class="rTableHead">
            <strong>Name</strong>
          </div>
          <div class="rTableHead">
            <span style="font-weight: bold;">Telephone</span>
          </div>
          <div class="rTableHead">&nbsp;</div>
        </div>
        <div class="rTableRow">
          <div class="rTableCell">John</div>
          <div class="rTableCell">
            <a href="tel:0123456785">0123 456 785</a>
          </div>
          <div class="rTableCell">
            <img src="images/check.gif" alt="checked" />
          </div>
        </div>
        <div class="rTableRow">
          <div class="rTableCell">Cassie</div>
          <div class="rTableCell">
            <a href="tel:9876532432">9876 532 432</a>
          </div>
          <div class="rTableCell">
            <img src="images/check.gif" alt="checked" />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Borrar;
