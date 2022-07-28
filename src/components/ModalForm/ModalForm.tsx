import { useState } from "react";
import { closeFormActionCreator } from "../../redux/features/newLocationSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { addLocationThunk } from "../../redux/thunks/locationsThunks";
import { LocationForm } from "../../types/types";
import StyledModalForm from "./StyledModalForm";

const ModalForm = (): JSX.Element => {
  const blankFields: LocationForm = {
    name: "",
    description: "",
    image: [],
  };

  const dispatch = useAppDispatch();
  const { coordinates } = useAppSelector((state) => state.newLocation);
  const { id } = useAppSelector((state) => state.user.userInfo);
  const [formData, setFormData] = useState(blankFields);

  const clearForm = () => {
    setFormData(blankFields);
  };

  const closeForm = () => {
    dispatch(closeFormActionCreator());
    clearForm();
  };

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

  const submitNewLocation = (event: React.FormEvent) => {
    event.preventDefault();

    const newFormData = new FormData();

    newFormData.append("name", formData.name);
    newFormData.append("description", formData.description);
    newFormData.append("latitude", coordinates[0].toString());
    newFormData.append("longitude", coordinates[1].toString());
    if (formData.image !== []) {
      formData.image.forEach((image) => {
        newFormData.append("image", image);
      });

      dispatch(addLocationThunk(newFormData, id));
      setFormData(blankFields);
      closeForm();
    }
  };
  return (
    <StyledModalForm className="modal__form">
      <form onSubmit={submitNewLocation}>
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
          <button className="form__buttons--close" onClick={closeForm}>
            Close
          </button>
        </div>
      </form>
    </StyledModalForm>
  );
};

export default ModalForm;
