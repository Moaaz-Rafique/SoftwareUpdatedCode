import React from "react";
import SMInput from "../../components/SMInput";
import SMSelect from "../../components/SMSelect";

export const InstitueForm = () => {
  return (
    <>
      <div>
        <h1 className="display-5 fw-bold text-center mx-auto">InstitueForm</h1>
      </div>

      <div>
        <div className="conatiner align-items-center">
          <div className="row justify-content-center mx-auto">
            <div className="col-md-4 ">
              <div>
                <SMInput myClass="w-100 m-3" label="Institute name" />
              </div>
              <div>
                <SMInput myClass="w-100 m-3" label="Institute ShortName" />
              </div>
              <div>
                <SMInput
                  myClass="w-100 m-3"
                  type="number"
                  label="No of campus "
                />
              </div>
              <div>
                <SMInput myClass="w-100 m-3" label="Campus detail" />
              </div>
              <div>
                <SMInput myClass="w-100 m-3" type="url" label="Location URL" />
              </div>
              <div>
                <SMInput myClass="w-100 m-3" label=" Address" />
              </div>
            </div>
            <div className="col-md-4 ">
              <div>
                <SMInput
                  type="file"
                  myPlaceholder="Logo Image"
                  myClass="w-100 m-3"
                />
              </div>
              <div>
                <SMInput myClass="w-100 m-3" type="number" label="Contact" />
              </div>
              <div>
                <SMInput
                  myClass="w-100 m-3"
                  type="number"
                  label=" Owner Contact "
                />
              </div>
              <div>
                <SMInput myClass="w-100 m-3" type="email" label="Owner Email" />
              </div>
              <div>
                <SMSelect
                  myClass="w-100"
                  dropDownHeading=" User Type"
                  dropDownOptions={[
                    {
                      value: "institute",
                      option: "Institute",
                    },
                  ]}
                />
              </div>
              <div>
                <SMSelect
                  myClass="w-100"
                  dropDownHeading=" Institute Type"
                  dropDownOptions={[
                    {
                      value: "school",
                      option: "School",
                    },
                    {
                      value: "college",
                      option: "College",
                    },
                    {
                      value: "university",
                      option: "University",
                    },
                    {
                      value: "institute",
                      option: "Institute",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
