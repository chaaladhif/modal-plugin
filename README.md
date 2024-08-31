# modal component for React and js applications.
# The link to the npm library: https://www.npmjs.com/package/chaalaa-modal
🚀 Installation Via npm:

npm install chaalaa-modal
Or via yarn:
yarn add chaalaa-modal
# Utilisation
Voici un exemple de base pour utiliser my-modal-plugin dans votre projet React.
Copier le code

import React, { useState } from 'react';
import Modal from 'chaalaa-modal';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={closeModal} text="Hello, this is a modal!">
        <h2>My Modal Title</h2>
        <p>This is the content of the modal.</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};
export default App;

# Exemple spécifique
Voici comment chaalaa-modal a été utilisé dans un composant de création d'employé :

Copier le code
import { useState } from "react";
import "./style.css";
import Form from "../../components/form/index";
import Loader from "../../components/loader/index";
import Modal from "chaalaa-modal";

function CreateEmployee() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async () => {
    setLoading(true);
    await addEmployee();
    setLoading(false);
    setShowConfirmation(true);
  };

  return (
    <div className="create-employee-container">
      <h2 className="create-title">Create Employee</h2>
      <Form
        setShowConfirmation={setShowConfirmation}
        onSubmit={handleFormSubmit}
      />
      {loading && <Loader />}
      <Modal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        text="Employee Created!"
      />
    </div>
  );
}
export default CreateEmployee;

# Merci d'utiliser chaalaa-modal ! Si vous avez des questions ou des suggestions, n'hésitez pas à ouvrir une issue ou à me contacter.

# Author:
Chaala Dhifallah