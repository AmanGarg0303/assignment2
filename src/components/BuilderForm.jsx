import React, { useState } from "react";

const BuilderForm = () => {
  const [addField, setAddField] = useState(false);
  const [isPluralYes, setIsPluralYes] = useState(false);

  console.log(isPluralYes);

  return (
    <div className="text-center p-10">
      <div className="border">
        <h2 className="text-left border-b">App Fields</h2>

        <div className="border border-dotted p-5 m-5">No fields exists</div>

        <button
          className="border hover:bg-gray-200"
          onClick={() => setAddField(true)}
        >
          + add a field
        </button>
      </div>

      {addField && (
        <div className=" border my-20">
          <h2 className=" border-b text-left">New from item</h2>
          <div className="flex justify-around my-5">
            <h2>Item type:</h2>
            <div className="flex justify-around">
              <div className="form-check form-check-inline mx-2">
                <input
                  className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label
                  className="form-check-label inline-block text-gray-800"
                  htmlFor="inlineRadio1"
                >
                  Container
                </label>
              </div>
              <div className="form-check form-check-inline mx-2">
                <input
                  className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label
                  className="form-check-label inline-block text-gray-800"
                  htmlFor="inlineRadio2"
                >
                  Field
                </label>
              </div>
            </div>
          </div>
          <div className="my-5">
            <label htmlFor="fieldname" className="flex justify-around">
              <h2>Field name</h2>
              <input
                type="text"
                placeholder="field name"
                id="fieldname"
                className="border p-1"
              />
            </label>
          </div>
          <div className="my-5">
            <label htmlFor="fieldid" className="flex justify-around">
              <h2>Field id</h2>
              <input
                type="text"
                id="fieldid"
                placeholder="field id"
                className="border p-1"
              />
            </label>
          </div>

          <div className="flex justify-around my-5">
            <h2>Is plural field:</h2>
            <div className="flex justify-around">
              <div className="form-check form-check-inline mx-2">
                <input
                  className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  id="ispluralfieldyes"
                  name="ispluralfieldoption"
                  value="option1"
                  onClick={() => setIsPluralYes(true)}
                />
                <label
                  className="form-check-label inline-block text-gray-800"
                  htmlFor="ispluralfieldyes"
                >
                  Yes
                </label>
              </div>
              <div className="form-check form-check-inline mx-2">
                <input
                  className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  id="ispluralfieldno"
                  name="ispluralfieldoption"
                  value="option2"
                  onClick={() => setIsPluralYes(false)}
                />
                <label
                  className="form-check-label inline-block text-gray-800"
                  htmlFor="ispluralfieldno"
                >
                  No
                </label>
              </div>
            </div>
          </div>
          {isPluralYes && (
            <div>
              <div className="my-5">
                <label htmlFor="entryname" className="flex justify-around">
                  <h2>Entry name:</h2>
                  <input
                    type="text"
                    id="entryname"
                    placeholder="entry name"
                    className="border p-1"
                  />
                </label>
              </div>
            </div>
          )}

          <div className="text-right mr-10 flex justify-end">
            <button
              className="border mx-5 hover:bg-gray-200"
              onClick={() => setAddField(false)}
            >
              Cancel
            </button>
            <button className="border mx-5 hover:bg-gray-200">Create</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuilderForm;
