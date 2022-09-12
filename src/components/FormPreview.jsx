import React from "react";
import { useState } from "react";

const FormPreview = () => {
  const [serviceList, setServiceList] = useState([{ service: "" }]);

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "" }]);
  };

  return (
    <div className="border m-10">
      <h2 className="border">My Form</h2>
      <div className="my-5">
        <label htmlFor="company" className="flex justify-around">
          <h2>Company</h2>
          <input
            type="text"
            id="company"
            placeholder="company"
            className="border p-1"
          />
        </label>
      </div>

      <div className="my-5">
        <h3>Management team</h3>
        <form
          className="w-[70vh] my-20 mx-auto flex justify-between"
          autoComplete="off"
        >
          <div className="form-field flex-[2]">
            <label htmlFor="service">Name</label>
            {serviceList.map((singleService, index) => (
              <div key={index} className="services flex justify-between">
                <div className="first-division">
                  <input
                    name="service"
                    type="text"
                    id="service"
                    value={singleService.service}
                    className="border my-4 px-1 py-1"
                    onChange={(e) => handleServiceChange(e, index)}
                    required
                  />
                  {serviceList.length - 1 === index && serviceList.length < 7 && (
                    <button
                      type="button"
                      onClick={handleServiceAdd}
                      className="add-btn flex border hover:bg-gray-200"
                    >
                      <span>New entry</span>
                    </button>
                  )}
                </div>
                <div className="second-division">
                  {serviceList.length !== 1 && (
                    <button
                      type="button"
                      onClick={() => handleServiceRemove(index)}
                      className="remove-btn"
                    >
                      <span>Remove</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </form>
      </div>

      <h2>Company Metadata</h2>

      <div className="my-5">
        <label htmlFor="address" className="flex justify-around">
          <h2>Address</h2>
          <input
            type="text"
            id="address"
            placeholder="address"
            className="border p-1"
          />
        </label>
      </div>
      <div className="my-5">
        <label htmlFor="ceo" className="flex justify-around">
          <h2>CEO</h2>
          <input
            type="text"
            id="ceo"
            placeholder="ceo"
            className="border p-1"
          />
        </label>
      </div>
    </div>
  );
};

export default FormPreview;
