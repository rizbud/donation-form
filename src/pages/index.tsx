import Head from "next/head";
import { useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { formatNumber } from "~/libs";
import { formValidation } from "~/validations";

import {
  BaseButton,
  BaseInput,
  BaseModal,
  BaseTextArea,
} from "~/components/atoms";

import type { FormType } from "~/types";

const Home = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormType>({
    resolver: yupResolver(formValidation),
  });

  const name = watch("name");

  const onSubmit = () => {
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Donation Form</title>
        <meta
          name="description"
          content="Donation Form for Interaktiv Front End Test"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-sans min-h-screen bg-slate-100 overflow-x-hidden lg:overflow-x-auto">
        <div className="w-full xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto my-5">
          <div className="max-w-xl mx-auto py-4">
            <div className="px-6 rounded-lg gap-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="bg-white shadow-md pt-6 pb-1 px-6 rounded-lg mb-6 relative">
                  <Controller
                    control={control}
                    name="amount"
                    render={({ field }) => (
                      <BaseInput
                        label="Amount"
                        hasPrefix
                        placeholder="10"
                        required
                        value={formatNumber(field.value ?? "", ",")}
                        onChange={(e) =>
                          field.onChange(
                            e.target.value
                              .replace(/[^0-9]/g, "")
                              .replace(/^0+/, ""),
                          )
                        }
                        error={errors.amount?.message}
                      />
                    )}
                  />

                  <BaseInput
                    label="Name"
                    placeholder="John Doe"
                    required
                    {...register("name")}
                    error={errors.name?.message}
                  />

                  <BaseInput
                    label="Email"
                    type="email"
                    placeholder="johndoe@gmail.com"
                    required
                    {...register("email")}
                    error={errors.email?.message}
                  />

                  <BaseInput
                    label="ID Number (NRIC/FIN)"
                    placeholder="S1234567A"
                    required
                    maxLength={9}
                    {...register("id_number")}
                    error={errors.id_number?.message}
                  />

                  <BaseInput
                    label="Postal Code"
                    type="number"
                    placeholder="123456"
                    required
                    maxLength={6}
                    {...register("postal_code")}
                    error={errors.postal_code?.message}
                  />

                  <BaseInput
                    label="Unit Number"
                    placeholder="123-45"
                    required
                    {...register("unit_number")}
                    error={errors.unit_number?.message}
                  />

                  <BaseTextArea
                    label="Address"
                    placeholder={`Street Name\nBlock Number, Building Name`}
                    rows={2}
                    {...register("address")}
                    error={errors.address?.message}
                  />

                  <BaseTextArea
                    label="Remarks"
                    placeholder="Optional"
                    rows={1}
                    {...register("remarks")}
                    error={errors.remarks?.message}
                  />
                </div>

                <BaseButton type="submit" label="SEND" className="w-full" />
              </form>
            </div>
          </div>
        </div>

        <BaseModal isOpen={submitted}>
          <div className="flex flex-col items-center justify-center text-center gap-5">
            <div className="text-2xl font-bold text-primary">
              Thank you for your donation, {name}!
            </div>

            <div className="text-secondary">We will contact you shortly.</div>

            <BaseButton
              label="Close"
              className="w-full"
              onClick={() => {
                reset();
                setSubmitted(false);
              }}
            />
          </div>
        </BaseModal>
      </main>
    </>
  );
};

export default Home;
