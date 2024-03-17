import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '../Button/Button';

export interface FieldConfig {
  name: string;
  label: string;
  type: 'text' | 'number' | 'file' | 'email' | 'tel' | 'date' | "select";
  accept?: string
  options?: string[]
}

interface FormProps {
  initialValues: any;
  validationSchema: Yup.ObjectSchema<any>;
  fields: FieldConfig[];
  onSubmit: (values: any, formikHelpers: any) => void;
  submitButtonText: string;
  className?: string;
  children?: React.ReactNode
}

const RegisterForm: React.FC<FormProps> = ({ initialValues, validationSchema, fields, onSubmit, submitButtonText, className, children }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formikProps => (
        <Form className={className}>
          {fields.map((field, index) => (
            <div key={index} className='flex flex-col gap-[8px] mb-[32px]'>
              <label htmlFor={field.name}>{field.label}</label>
              {field.type === 'file' ? (
                <input
                  type="file"
                  id={field.name}
                  name={field.name}
                  accept={field.accept || ''}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    formikProps.setFieldValue(field.name, event.currentTarget.files![0]);
                  }}
                />
              ) : field.type === 'select' ? ( // Render select element for type 'select'
                <Field as="select" id={field.name} name={field.name} className="border-[1px] border-gray-300 rounded-[6px] py-[12px] px-[16px]">
                  {field.options && field.options.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </Field>
              ) : (
                <Field type={field.type} id={field.name} placeholder={field.label} name={field.name} className="border-[1px] border-gray-300 rounded-[6px] py-[12px] px-[16px]" />
              )}
              <ErrorMessage name={field.name} component="div" className='text-red-800 text-sm font-medium' />
            </div>
          ))}
          {children}
          <Button type='submit' buttonType='primary'>{submitButtonText}</Button>
        </Form>
      )}
    </Formik>
  );
};


export default RegisterForm;