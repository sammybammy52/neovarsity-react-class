import React from "react";
import Header from "../../components/Header";
import CurrencyInput from "react-currency-input-field";

const Home = () => {
  return (
    <>
      <Header />

      <h4>Home</h4>
      <div>
        <CurrencyInput
          id="input-example"
          name="input-name"
          placeholder="Please enter a number"
          className="py-3 px-3 w-[200px] border-2 focus:border-purple-600 acti"
          prefix="N"
          defaultValue={1000}
          decimalsLimit={2}
          onValueChange={(value, name, values) =>
            console.log(value, name, values)
          }
        />
      </div>
    </>
  );
};

export default Home;
