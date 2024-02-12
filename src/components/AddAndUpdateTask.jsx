import React from "react";
import Modal from "./Modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { db } from "../config/firebase";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import * as Yup from "yup"

const taskvalidationSchema = Yup.object().shape({
  Title: Yup.string().required("*Title is required"),
  Description: Yup.string().required("*Description is Required")
})

const AddAndUpdateTask = ({ isOpen, onClose, isUpdate, task }) => {
  const addTask = async (task) => {
    try {
      const taskRef = collection(db, "Tasks");
      await addDoc(taskRef, task);
      onClose()
      toast.success("Task Added Successfully")
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (task,id) => {
    try {
      const taskRef = doc(db, "Tasks",id);
      await updateDoc(taskRef, task);
      onClose()
      toast.success("Task Updated Successfully")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
        validationSchema={taskvalidationSchema}
          initialValues={
            isUpdate
              ? {
                  Title: task.Title,
                  Description: task.Description,
                }
              : {
                  Title: "",
                  Description: "",
                }
          }
          onSubmit={(values) => {

            isUpdate? updateTask(values, task.id):
            addTask(values);
          }}
        >
          <Form className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="Title">Title</label>
              <Field name="Title" className="h-10  border p-2" />
              <div className="text-red-500 text-xs">
                <ErrorMessage name="Title"/>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="Description">Description</label>
              <Field name="Description" className="h-10 border p-2" />
              <div className="text-red-500 text-xs">
                <ErrorMessage name="Description"/>
              </div>
            </div>

            <button
              type="submit"
              className="bg-orange px-3 py-1.5 rounded-md border"
            >
              {isUpdate ? "Update" : "Save"}
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdateTask;
