import "@ui5/webcomponents/dist/features/InputElementsFormSupport";
import { Form, FormItem, Input, Label } from "@ui5/webcomponents-react";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div>
      <pre>{JSON.stringify({ phone, firstName, lastName })}</pre>
      <Form>
        <FormItem label={<Label>First Name</Label>}>
          <Input onInput={(e) => setFirstName(e.target.value)} />
        </FormItem>
        <FormItem label={<Label>Last Name</Label>}>
          <Input onInput={(e) => setLastName(e.target.value)} />
        </FormItem>
        <FormItem label={<Label>Phone</Label>}>
          <Input onInput={(e) => setPhone(e.target.value)} />
        </FormItem>
      </Form>
    </div>
  );
}

export default App;
