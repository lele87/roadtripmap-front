import { useEffect, useState } from "react";
import { LocationForm } from "../../types/types";
import StyledModalForm from "./StyledModalForm";

const ModalForm = (): JSX.Element => {
  const blankFields: LocationForm = {
    name: "",
    description: "",
    image: [],
  };

  const [formData, setFormData] = useState(blankFields);

  const handleChangeData = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    setFormData({
      ...formData,
      image: files ? Array.from(files) : [],
    });
  };

  return (
    <StyledModalForm className="modal__form">
      {/* <div className="modal__background" onClick={() => setIsOpen(false)} /> */}
      <form>
        <label htmlFor="name"></label>
        <input
          id="name"
          formNoValidate
          autoComplete="off"
          value={formData.name}
          type="text"
          onChange={handleChangeData}
          placeholder="Name"
        />
        <label htmlFor="description"></label>
        <textarea
          id="description"
          autoComplete="off"
          value={formData.description}
          onChange={handleChangeData}
          placeholder="Description"
        />
        <label htmlFor="image"></label>
        <input
          id="image"
          type="file"
          onChange={handleChangeImage}
          className="image-input"
        />
        <div className="form__buttons">
          <button
            className="form__buttons--submit"
            disabled={formData.description === "" || formData.name === ""}
            type="submit"
            value="submit"
          >
            Save
          </button>
          <button className="form__buttons--close">Close</button>
        </div>
      </form>
    </StyledModalForm>
  );
};

export default ModalForm;
