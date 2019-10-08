import React, { useState } from "react";

function Form() {
  const [data, setData] = useState(" ");

  return (<form>
    <input value={data} onChange={e => setData(e.target.value)} placeholder="0" type="radio" name="data" required />

    <button type="submit">Submit</button>
  </form>)
}

export default Form;