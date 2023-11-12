"use client";
import { Button, TextInput } from "@carbon/react";
import { CaretDown, CaretRight } from "@carbon/icons-react";
import "./App.scss";
import { useRef, useState } from "react";

const Field = ({ title, value, setValue, id }) => {
  const fieldTitle = title.trim();
  return (
    <div className="App-field">
      <text className="App-field-title">{fieldTitle}</text>
      <TextInput
        name={id}
        onChange={(e) => setValue(e.target.value)}
        {...{ id, value }}
        className="App-field-input"
        value={value}
      />
    </div>
  );
};

function App() {
  const [advancedShown, setAdvancedShown] = useState(false);
  const [tokenPrefix, setTokenPrefix] = useState("default");
  const accessTokenField = useRef();

  return (
    <div className="App">
      <div className="App-section">OAuth Authentication</div>
      <Field
        title="Token prefix"
        value={tokenPrefix}
        setValue={setTokenPrefix}
        id="Bearer_field"
      />
      <Field
        ref={(ref) => {
          accessTokenField.current = ref;
        }}
        title="Access Token"
      />
      <div className="App-section">Generate New Token</div>
      <Field title="Grant type" value={null} />
      <Field title="Auth url" value={null} />
      <Field title="Token url" value={null} />
      <Field title="Callback url" value={null} />
      <Field title="Client ID" value={null} />
      <Field title="Client secret" value={null} />
      <Field title="Scope" value={null} />
      <Field title="State" value={null} />
      <Field title="Send Auth" value={null} />
      <div className="App-section">
        <div onClick={() => setAdvancedShown(!advancedShown)}>
          {advancedShown ? (
            <CaretDown size={40} style={styles.caretRight} />
          ) : (
            <CaretRight size={40} style={styles.caretRight} />
          )}
        </div>
        <text className="App-title">Advanced Options</text>
      </div>
      {advancedShown && (
        <>
          <Field title="Audience" value={null} />
          <Field title="Resource" value="" />
          <Field title="Origin" value="" />
          <Field title="Token Name" value="access_token" />
        </>
      )}
      <Button
        style={{ width: 200 }}
        onClick={() => alert("Access token: " + tokenPrefix)}
      >
        Button
      </Button>
    </div>
  );
}

const styles = {
  fieldTitle: {
    fontSize: 18,
    color: "#fff",
    backgroundColor: "#222",
    padding: 4,
    width: 400,
  },
  caretRight: {
    backgroundColor: "#222",
    marginEnd: 20,
  },
};

export default App;
