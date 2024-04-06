import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '../button/Button';

export interface FieldConfig {
  name: string;
  label: string;
  type: 'text' | 'number' | 'file' | 'email' | 'tel' | 'date' | "select" | "checkbox";
  accept?: string
  options?: string[]
}

interface FormProps {
  initialValues: any;
  validationSchema: Yup.ObjectSchema<any>;
  fields: FieldConfig[];
  onSubmit: (values: any, formikHelpers: any) => void;
  submitButtonText: string;
  backendError?: any;
  className?: string;
  children?: React.ReactNode
}

const RegisterForm: React.FC<FormProps> = ({ initialValues, validationSchema, fields, onSubmit, submitButtonText, backendError = null, className, children }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formikProps => {
        const renderField = (field: FieldConfig) => {
          if (field.type === 'file') {
            return (
              <input
                type="file"
                id={field.name}
                name={field.name}
                accept={field.accept || ''}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  const file = event.currentTarget.files ? event.currentTarget.files[0] : "";
                  console.log("image file", event.currentTarget.files);
                  formikProps.setFieldValue(field.name, file);
                }}
              />
            );
          } else if (field.type === 'select') {
            return (
              <Field as="select" id={field.name} name={field.name} className="border-[1px] border-gray-300 rounded-[6px] py-[12px] px-[16px]">
                <option value={""}>{field.label}</option>
                {field.options ? field.options.map(option => (
                  <option key={option} value={option}>{option}</option>
                )) : ""}
              </Field>
            );
          } else if(field.type === 'checkbox'){
            return(
              <label className='flex items-center gap-3 cursor-pointer'>
                {field.label}
                <Field type={field.type} id={field.name} name={field.name} className="cursor-pointer bg-gray-100  text-green-800 w-4 h-4" />
              </label>
            )
          }else {
            return (
              <Field type={field.type} id={field.name} placeholder={field.label} name={field.name} className="border-[1px] border-gray-300 rounded-[6px] py-[12px] px-[16px]" />
            );
          }
        };

        return <Form className={className}>
          {fields.map((field, index) => (
            <div key={index} className='flex flex-col gap-[8px] mb-[32px]'>
              {field.type !== 'checkbox'?<label htmlFor={field.name}>{field.label}</label>:""}
              {renderField(field)}
              {backendError?.[field.name]?.[0] && <p className='text-red-800 text-sm font-medium'>{backendError[field.name][0]}</p>}
              <ErrorMessage name={field.name} component="div" className='text-red-800 text-sm font-medium' />

            </div>
          ))}
          {children}
          <Button type='submit' buttonType='primary'>{submitButtonText}</Button>
        </Form>
      }
      }
    </Formik>
  );
};


export default RegisterForm;