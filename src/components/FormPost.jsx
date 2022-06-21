import { Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const FormPost = (props) => {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);

  useEffect(() => {
    setTitle(props.title);
  }, [props.title]);

  useEffect(() => {
    setBody(props.body);
  }, [props.body]);
  return (
    <div>
      <TextField
        variant="filled"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        variant="filled"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => props.onSubmit({ title, body })}
      >
        {props.type === "add" ? "Add" : "Edit"}
      </Button>
    </div>
  );
};

export default FormPost;
