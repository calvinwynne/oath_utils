import { Button, TextInput } from "@carbon/react";
import { CaretDown, CaretRight } from "@carbon/icons-react";

import { useEffect, useRef, useState } from "react";

const styles = {
  caretRight: {
    backgroundColor: "#111111",
    marginEnd: 1,
  },
  fieldInputText: {
    color: " #ababab",
  },
  fieldInput: {
    width: "450px",
    resize: false,
    color: "#fff",
    backgroundColor: "#2b2828",
  },
};

const Field = ({ title, value, setValue }) => {
  const fieldTitle = title.trim();
  return (
    <div className="App-field">
      <text className="App-field-title" style={styles.fieldInputText}>
        {fieldTitle}
      </text>
      <TextInput
        className="App-field-input"
        onChange={(e) => setValue(e.target.value)}
        style={styles.fieldInput}
        value={value}
      />
    </div>
  );
};

const ButtonComponent = ({ title, kind, callback }) => {
  return (
    <div className="App-Button">
      <Button
        style={{ width: 150, margin: 5 }}
        kind={kind}
        onClick={() => alert("Access token: " + callback)}
      >
        {title}
      </Button>
    </div>
  );
};

const OAuthForm = () => {
  const [advancedShown, setAdvancedShown] = useState(false);
  const [tokenPrefix, setTokenPrefix] = useState("");
  const [grantType, setGrantType] = useState("");
  const [authURL, setAuthURL] = useState("");
  const [tokenURL, setTokenURL] = useState("");
  const [callbackURl, setCallbackURl] = useState("");
  const [clientID, setClientID] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [scope, setScope] = useState("");
  const [state, setState] = useState("");
  const [sendAuth, setSendAuth] = useState("");

  useEffect(() => {
    console.log("Token prefix: ", tokenPrefix);
  }, [tokenPrefix]);

  return (
    <div className="OAuthForm">

      <div className="App-section">OAuth Authentication</div>
      <Field title="Token prefix" value={tokenPrefix} setValue={setTokenPrefix} />
      <Field title="Grant type" value={grantType} setValue={setGrantType} />

      <div className="App-section">Generate New Token</div>
      <Field title="Grant type" value={grantType} setValue={setGrantType} />
      <Field title="Auth url" value={authURL} setValue={setAuthURL}  />
      <Field title="Token url" value={tokenURL} setValue={setTokenURL}  />
      <Field title="Callback url" value={callbackURl} setValue={setCallbackURl}  />
      <Field title="Client ID" value={clientID} setValue={setClientID}  />
      <Field title="Client secret" value={clientSecret} setValue={setClientSecret}  />
      <Field title="Scope" value={scope} setValue={setScope}  />
      <Field title="State" value={state} setValue={setState}  />
      <Field title="Send Auth" value={sendAuth} setValue={setSendAuth}  />

      <div className="App-section">
        <div onClick={() => setAdvancedShown(!advancedShown)}>
          {advancedShown ? (
            <CaretDown size={30} style={styles.caretRight} />
          ) : (
            <CaretRight size={30} style={styles.caretRight} />
          )}
        </div>
        <text className="App-title">Advanced Options</text>
      </div>

      {advancedShown && (
        <div className="App-section-additional-fields">
          <Field title="Audience" value={null} />
          <Field title="Resource" value="" />
          <Field title="Origin" value="" />
          <Field title="Token Name" value="access_token" />
        </div>
      )}

      <div className="bottom-button-section">
        <ButtonComponent
          title="Primary"
          kind="primary"
          callback={tokenPrefix}
        ></ButtonComponent>{" "}
        <ButtonComponent
          title="secondary"
          kind="secondary"
          callback={tokenPrefix}
        ></ButtonComponent>
      </div>

    </div>
  );
};

export default OAuthForm;
