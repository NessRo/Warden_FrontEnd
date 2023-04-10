import { useEffect, useRef, useState } from "react";
import { setTemplateName } from "../Admin/QuestionaireTemplates/actions";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-bootstrap";
import style from "./EditableText.module.css";
import classNames from "classnames";
import { store } from "../../store";

const EditableText = ({
  val,
  placeholder,
  width,
  containerClassName,
  onChange,
  // eslint-disable-next-line no-unused-vars
  isRequired = false,
}) => {
  const [text, setText] = useState(val ? val : "");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setText(val);
  }, [val]);



  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);


  const handleOnChange = (e) => {
    setText(e.target.value);
    store.dispatch(setTemplateName(e.target.value));
    console.log(store.getState())

  };

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      e.target.blur();
    }
  };

  const handleOnBlur = (e) => {
    let value = e.target.value;
    if (value && value.length) {
      setText(e.target.value);
      if (onChange) {
        onChange(value);
      }
    }
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const widthStyle = width ? { width: width, height: "38px"} : null;
  const containerClassNames = classNames(containerClassName, "d-inline-block");

  return (
    <div className={containerClassNames} style={widthStyle}>
      {isEditing ? (
        <Form.Control
          value={text}
          placeholder={placeholder}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          onKeyDown={handleOnKeyDown}
          style={widthStyle}
          ref={inputRef}
        />
      ) : (
        <div
          onClick={handleEditClick}
          style={{ height: "38px" }}
          className={style.textContainer}
        >
          <div
            className={classNames(style.text, "d-inline-block")}
            style={widthStyle}
          >
            {text}
          </div>
          <div className="d-inline-block">
            <FontAwesomeIcon icon={faPen} />
          </div>
        </div>
      )}
    </div>
  );
};

EditableText.propTypes = {
  val: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  containerClassName: PropTypes.string,
  onChange: PropTypes.func,
  isRequired: PropTypes.bool,
};

export default EditableText;