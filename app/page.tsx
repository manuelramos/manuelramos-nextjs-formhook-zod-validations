'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import FormSchema from "./schemas/user.schema";
import React from "react";

type InputNames = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  weight: number;
  height: number;
  dob: Date;
  plans: string;
}

export default function Home() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<InputNames>(
    {
      resolver: zodResolver(FormSchema)
    }
  );

  console.log(errors);

  return (
    <div>

      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit(data => {
            console.log(data);
          })}
          className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

          {/* First Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              {...register('firstName')}
            />
            <div
              id="firstNameErrors"
              className="text-red-500 text-xs italic"
            >
              {errors.firstName?.message}
            </div>
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="last-name">
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              {...register('lastName')}
            />
            <div
              id="lastNameErrors"
              className="text-red-500 text-xs italic"
            >
              {errors.lastName?.message}
            </div>
          </div>

          {/* email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              {...register('email')}
            />
            <div
              id="emailErrors"
              className="text-red-500 text-xs italic"
            >
              {errors.email?.message}
            </div>

          </div>

          {/* password */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              id="password"
              {...register('password')}
            />
            <div
              id="passwordErrors"
              className="text-red-500 text-xs italic"
            >
              {errors.password?.message}
            </div>

          </div>

          {/* confirm password */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              id="confirmPassword"
              {...register('confirmPassword')}
            />
            <div
              id="confirmPasswordErrors"
              className="text-red-500 text-xs italic"
            >
              {errors.confirmPassword?.message}
            </div>

          </div>

          {/* Weight */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weight">
              Weight
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              id="weight"
              {...register('weight')}
            />
            <div id="weightErrors" className="text-red-500 text-xs italic">
              {errors.weight?.message}
            </div>
          </div>

          {/* Height */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="height">
              Height
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" id="Height"
              {...register('height')}
            />
            <div id="weightErrors" className="text-red-500 text-xs italic">
              {errors.height?.message}
            </div>
          </div>

          {/* date of birth */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date-of-birth">
              Date of Birth
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="date" id="dob"
              {...register('dob')}
            />
            <div id="weightErrors" className="text-red-500 text-xs italic">
              {errors.dob?.message}
            </div>
          </div>

          {/*  Plans */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="plans">
              Plans
            </label>
            <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="plans"
              {...register('plans')}
            >
              <option value="basic">Basic</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
            <div id="weightErrors" className="text-red-500 text-xs italic">
              {errors.plans?.message}
            </div>

          </div>

          {/* submit */}
          <div className="flex items-center justify-end">
            <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Submit" />
          </div>
        </form>
      </div>

      <div className="mt-5 mx-auto w-1/2 p-4 bg-red-100 text-red-500 rounded shadow">
        <pre>{JSON.stringify(watch(), null, 2)}</pre>
      </div>
    </div>
  );
}