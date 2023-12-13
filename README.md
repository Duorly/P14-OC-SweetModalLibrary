# React-Sweet-Modal

NPM package made with vite

## Documentation
https://Duorly.github.io/P14-OC-SweetModalLibrary/

## Description

React component for displaying a modal in full screen mode.
The modal contains:

- a close button
- a title
- content (which can be text or a component)

## Install

```bash
npm i react-sweet-modal
```

## Documentation

After installing the package on your dependencies, add

```
"react-sweet-modal": ["node_modules/react-sweet-modal/dist/index.d.ts"]
in tsconfig.json on paths options and import the library in your parent component.
```

### Importation

```jsx
import { Modal } from "react-sweet-modal";
```

### Setup the state to open / close the modal in your parent component

- import useState from react
- create the state with useState => it will be a boolean with false by default

```jsx
const [isOpen, setIsOpen] = useState(false);
```

### Modal Implementation

```jsx
<Modal
  show={isOpen}
  close={() => setIsOpen(false)}
  title="Custom Modal Title"
  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Unum nescio,."
/>
```

### Props Description

- Close (required): handle the modal closing. the props is must receive a function where you pass the setter to false
- show (required) : handle the modal opening. the props must receive the state value of the getter (isOpen)
- title(required): contain the modal title
- content(required): contain the modal content. It could be a string or an object

#### Example

```jsx
import { useState } from "react";
import { Modal } from "../lib/Modal";

export const ModalScaffold = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      <Modal
        show={isModalOpen}
        close={closeModal}
        title="Custom Modal Title"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Unum nescio,."
      />
    </div>
  );
};
```

## License

© [Duorli Réjouis Nebel Massengo](https://github.com/Duorly)
