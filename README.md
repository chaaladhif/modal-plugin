# Modal Component for React and JS Applications
-------------------------------------------------------

## The link to the npm library:  https://www.npmjs.com/package/chaalaa-modal?activeTab=readme

[![npm version](https://badge.fury.io/js/chaalaa-modal.svg)](https://www.npmjs.com/package/chaalaa-modal)
A customizable modal component for React and JavaScript applications.

## Prerequisites:

Before you begin, ensure you have met the following requirements:
Node.js: ^v14.0.0 or higher

## Dependencies

React: ^16.8.0 or higher

react-dom: ^16.8.0 or higher

## Installation

Via npm:

``` 
npm install chaalaa-modal

Or via yarn:

yarn add chaalaa-modal
```
## Usage

Here's a basic example of how to use chaalaa-modal in your React project:
```jsx
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

export default App; ```

## Specific Example
Here's how chaalaa-modal was used in an employee creation component:
```jsx
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
```

## Contributing
Thank you for using chaalaa-modal! If you have any questions or suggestions, please don't hesitate to open an issue or contact me.
## Author
Chaala Dhifallah