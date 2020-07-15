import React from "react";
import Modal from "react-modal";

const CheckBoxModal = (props) => {
    return (
      <div>
        <Modal 
           isOpen={props.showModal}
           contentLabel="Loading"
           closeTimeoutMS={200}
           ariaHideApp={false}
        >
          <h1>{props.text}</h1>
          <img className="loader__image" src="/images/loader.gif" alt="loader"/>
        </Modal>
      </div>
    );
}

export default CheckBoxModal;
