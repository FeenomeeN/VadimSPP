import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Styles from './Style'
import { Form, Field } from 'react-final-form'

const onSubmit = (values) => {
  alert('was add music')
  if (localStorage.getItem('music') === null)
    localStorage.setItem('music', JSON.stringify(values))
  else 
    localStorage.clear();
    localStorage.setItem('music', JSON.stringify(values))

  // window.alert(JSON.stringify(values))
  // let list = []

  // try {
  //   list = JSON.parse(localStorage.getItem('items') || '')
  // } catch (e) {
  //   console.error(e)
  // }

  // list.push(values)
  // localStorage.setItem('items', JSON.stringify(list))

}

// const onSubmitEdit = (position:number) => {
//   let arrayFinal = null
//   arrayFinal = array.pop()



// }


const required = (value) => (value ? undefined : 'Required')
// const mustBeNumber = (value:string) => (isNaN(value) ? 'Must be a number' : undefined)
// const minValue = (min:any) => (value:any) =>
//   isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`
// const composeValidators = (...validators:any[]) => (value:any) =>
//   validators.reduce((error, validator) => error || validator(value), undefined)

const Forms = ({ active }) => {

  return (
    <Styles>
      {(active) && (
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <Field name="genre" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <label>Genre</label>
                    <input {...input} type="text" placeholder="Genre" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="name" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <label>Name Music</label>
                    <input {...input} type="text" placeholder="Name Music" ></input>
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="author" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <label>Author</label>
                    <input {...input} type="text" placeholder="Author" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="file_music" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <label>File</label>
                    <input {...input} type="file" placeholder="File" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <div className="buttons">
                <button type="submit" disabled={submitting}>
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
              <pre>{JSON.stringify(values)}</pre>
            </form>
          )}
        />
      )}
      {(!active) && (
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <Field name="name" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <label>Name Car</label>
                    <input {...input} type="text" placeholder="Car" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="model" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <label>Model</label>
                    <input {...input} type="text" placeholder="Model" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field
                name="manufacturer"
                validate={required}
              >
                {({ input, meta }) => (
                  <div>
                    <label>Manufacturer</label>
                    <input {...input} type="text" placeholder="Manufacturer" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field
                name="cost_in_credits"
                validate={required}
              >
                {({ input, meta }) => (
                  <div>
                    <label>Cost</label>
                    <input {...input} type="text" placeholder="Cost" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <div className="buttons">
                <button type="submit" disabled={submitting}>
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
              <pre>{JSON.stringify(values)}</pre>
            </form>
          )}
        />
      )}


    </Styles>
  );

}

export default Forms