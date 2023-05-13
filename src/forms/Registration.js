import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userData, setUserData] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const submit = (data) => {
    console.log(data);
    setUserData(data);
  };

  var countries = [
    {
      id: 1,
      name: "India",
      states: [
        {
          id: 1,
          name: "Gujarat",
          cities: [
            {
              id: 1,
              name: "Ahmedabad",
            },
            {
              id: 2,
              name: "Surat",
            },
            {
              id: 3,
              name: "Rajkot",
            },
          ],
        },
        {
          id: 2,
          name: "Maharashtra",
          cities: [
            {
              id: 1,
              name: "Mumbai",
            },
            {
              id: 2,
              name: "Pune",
            },
            {
              id: 3,
              name: "Nagpur",
            },
          ],
        },
        {
          id: 3,
          name: "Rajasthan",
          cities: [
            {
              id: 1,
              name: "Jaipur",
            },
            {
              id: 2,
              name: "Jodhpur",
            },
            {
              id: 3,
              name: "Udaipur",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "USA",
      states: [
        {
          id: 1,
          name: "New York",
          cities: [
            {
              id: 1,
              name: "New York City",
            },
            {
              id: 2,
              name: "Buffalo",
            },
            {
              id: 3,
              name: "Rochester",
            },
          ],
        },
        {
          id: 2,
          name: "California",
          cities: [
            {
              id: 1,
              name: "Los Angeles",
            },
            {
              id: 2,
              name: "San Diego",
            },
            {
              id: 3,
              name: "San Francisco",
            },
          ],
        },
        {
          id: 3,
          name: "Texas",
          cities: [
            {
              id: 1,
              name: "Houston",
            },
            {
              id: 2,
              name: "San Antonio",
            },
            {
              id: 3,
              name: "Dallas",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "UK",
      states: [
        {
          id: 1,
          name: "England",
          cities: [
            {
              id: 1,
              name: "London",
            },
            {
              id: 2,
              name: "Birmingham",
            },
            {
              id: 3,
              name: "Manchester",
            },
          ],
        },
        {
          id: 2,
          name: "Scotland",
          cities: [
            {
              id: 1,
              name: "Edinburgh",
            },
            {
              id: 2,
              name: "Glasgow",
            },
            {
              id: 3,
              name: "Aberdeen",
            },
          ],
        },
        {
          id: 3,
          name: "Wales",
          cities: [
            {
              id: 1,
              name: "Cardiff",
            },
            {
              id: 2,
              name: "Swansea",
            },
            {
              id: 3,
              name: "Newport",
            },
          ],
        },
      ],
    },
  ];

  return (
    /*
    left padding should be 20p
    */
    <div align="left" style={{ leftPadding: "20px" }}>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="name" style={{ paddingLeft: "10px" }}>
            Name:
          </label>
          &nbsp;
          <input
            type="text"
            name="name"
            id="name"
            {...register("name", { required: true })}
          />
          <br />
          {errors.name && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
        </div>
        <div>
          <label htmlFor="email" style={{ paddingLeft: "10px" }}>
            Email:
          </label>
          &nbsp;
          <input
            type="text"
            name="email"
            id="email"
            {...register("email", { required: true })}
          />
          <br />
          {errors.email && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
        </div>
        <div>
          <label htmlFor="password" style={{ paddingLeft: "10px" }}>
            Password:
          </label>
          &nbsp;
          <input
            type="password"
            name="password"
            id="password"
            {...register("password", { required: true })}
          />
          <br />
          {errors.password && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <br />
          Male
          <input
            type="radio"
            name="gender"
            value="Male"
            {...register("gender", { required: true })}
          />
          <br />
          Female
          <input
            type="radio"
            name="gender"
            value="Female"
            {...register("gender", { required: true })}
          />
          <br />
          {errors.gender && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
        </div>
        <div>
          <label htmlFor="hobbies">Hobbies</label>
          <br />
          <input
            type="checkbox"
            name="hobbies"
            value="Cricket"
            {...register("hobbies")}
          />
          Cricket
          <br />
          <input
            type="checkbox"
            name="hobbies"
            value="Football"
            {...register("hobbies")}
          />
          Football
          <br />
          <input
            type="checkbox"
            name="hobbies"
            value="Hockey"
            {...register("hobbies", { required: true })}
          />
          Hockey
          <br />
          <input
            type="checkbox"
            name="hobbies"
            value="Badminton"
            {...register("hobbies")}
          />
          Badminton
          <br />
          {errors.hobbies && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <br />
          <select
            name="country"
            {...register("country", { required: true })}
            onChange={(e) => {
              setSelectedCountry(e.target.value);
              setSelectedState("");
              setSelectedCity("");
            }}
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option value={country.name}>{country.name}</option>
            ))}
          </select>
          <br />
          {errors.country && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
        </div>
        <div>
          <label htmlFor="state">State</label>
          <br />
          <select
            name="state"
            {...register("state", { required: true })}
            onChange={(e) => {
              setSelectedState(e.target.value);
              setSelectedCity("");
            }}
          >
            <option value="">Select State</option>
            {selectedCountry &&
              countries
                .filter((country) => country.name === selectedCountry)[0]
                .states.map((state) => (
                  <option value={state.name}>{state.name}</option>
                ))}
          </select>
          <br />
          {errors.state && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
        </div>
        <div>
          <label htmlFor="city">City</label>
          <br />
          <select
            name="city"
            {...register("city", { required: true })}
            onChange={(e) => {
              setSelectedCity(e.target.value);
            }}
          >
            <option value="">Select City</option>
            {selectedState &&
              countries
                .filter((country) => country.name === selectedCountry)[0]
                .states.filter((state) => state.name === selectedState)[0]
                .cities.map((city) => (
                  <option value={city.name}>{city.name}</option>
                ))}
          </select>
          <br />
        </div>
        {errors.city && (
          <span style={{ color: "red" }}>This field is required</span>
        )}
        <div>
          <label htmlFor="submit"></label>
          <br />
          <input type="submit" name="submit" id="submit" />
        </div>
      </form>

      <h2>Output</h2>
      <div>
        <h3>Name: {userData.name}</h3>
        <h3>Email: {userData.email}</h3>
        <h3>Password: {userData.password}</h3>
        <h3>Gender: {userData.gender}</h3>
        <h3>
          Hobbies:
          <br />
          <ul>
            {userData.hobbies &&
              userData.hobbies?.map((hobby) => <li>{hobby}</li>)}
          </ul>
        </h3>
      </div>
      <br />
      <div>
        <h3>Country: {userData.country}</h3>
        <h3>State: {userData.state}</h3>
        <h3>City: {userData.city}</h3>
      </div>
    </div>
  );
};
