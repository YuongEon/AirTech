import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import styles from './otherForm.module.scss';

interface OtherFormProps {
  data?: {name: string}
  schemaPassing: z.ZodType<any>;
  title: string;
  closeModal: () => void;
  onCallApi: (data: any) => void;
}

const OtherForm = (props: OtherFormProps) => {
  // const [initialData, setInitialData] =  useState<{name: string}>(data)
  const { schemaPassing, title, closeModal, onCallApi } = props;
  const { handleSubmit, control, reset, formState, register } = useForm({
    resolver: zodResolver(schemaPassing),
  });

  const onCloseModal = () => {
    reset();
    closeModal();
  };

  const onSave = (data) => {
    onCallApi(data);
    reset();
    closeModal();
  };

  const { errors } = formState;

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSave)}>
      <div className="">
        <p>{title}</p>
        <input {...register("name")} />
        {errors.name && <p className={styles.error_text}>{errors.name?.message}</p>}
      </div>
      <div className="md:flex md:justify-between md:mt-8">
        <button
          type="button"
          className="bg-red-500 text-white"
          onClick={() => onCloseModal()}
        >
          Cancel
        </button>
        <button type="submit" className="bg-emerald-600 text-white">
          Confirm
        </button>
      </div>
    </form>
  );
};

export default OtherForm;
