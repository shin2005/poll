import React from "react";
import Modal from "react-modal";

export default function OptionModal({ onClose, isOpen }) {
  return (
    <Modal
      isOpen={!!isOpen}
      onRequestClose={onClose}
      contentLabel="Selected Option"
      closeTimeoutMS={200}
    >
      <h3>Selected Option</h3>
      <p>test</p>
      <button onClick={onClose}>
        Okay
      </button>
    </Modal>
  );
}
