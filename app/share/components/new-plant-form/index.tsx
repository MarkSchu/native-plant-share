'use client';

import { useFormState } from 'react-dom';
import { createSharedPlant } from '@/app/lib/actions';
import styles from './styles.module.css';

interface InputProps {
  type?: string;
  name: string;
  label: string;
  required: boolean;
}

interface CheckboxGroupOption {
  name: string;
  label: string;
}

interface CheckboxGroupProps {
  label: string;
  name: string;
  options: CheckboxGroupOption[];
}

function TextArea({name, label, required} : InputProps) {
  return (
    <div>
      <label>{label}</label>
      <textarea 
        className={styles.input}
        name={name}
        required={required}
      />
    </div>
  )
}

function Input({type, name, label, required} : InputProps) {
  return (
    <div>
      <label>{label}</label>
      <input 
        className={styles.input}
        type={type} 
        name={name}
        required={required}
      />
    </div>
  )
}

function CheckboxGroup({ label, name, options }: CheckboxGroupProps) {
  return (
    <fieldset>
      <label>{label}</label>
      {options.map((option: CheckboxGroupOption) => 
        <div key={option.name}>
          <input 
            type="checkbox"
            value={option.name}
            name={name}
          />
          <label>{option.label}</label>
        </div>
      )}
    </fieldset>
  )
}

export function NewPlantForm() {

  const [state, formAction] = useFormState(createSharedPlant, {message: ''});

  return (
    <form action={formAction}>
      {state?.message}
      {/* Common Name */}
      <Input 
        type="text" 
        name="commonName" 
        label="Common Name"
        required={true}
      />

      {/* Latin Name */}
      <Input 
        type="text" 
        name="latinName" 
        label="Latin Name"
        required={true}
      />

      {/* Description */}
      <TextArea 
        name="description" 
        label="Describe What You've Got"  
        required={true}
      />

      {/* Height */}
      <Input 
        type="text" 
        name="height" 
        label="Height"
        required={true}
      />
      
      {/* Growth Form */}
      <select 
        name="growthForm"
      >
        {([
          'annual',
          'daylily',
          'ferns',
          'grasses',
          'herb',
          'perennial',
          'vine',
          'tree'
        ]).map((growthForm, i) =>
          <option 
            key={growthForm} 
            value={growthForm}>
              {growthForm}
            </option>
        )}
      </select>

      {/* Sun */}
      <CheckboxGroup 
        label="Sun"
        name="sun"
        options={[
          {label: 'Full Sun', name: 'fullsun'},
          {label: 'Partial Shade', name: 'partshade'},
          {label: 'Shade', name: 'shade'},
        ]}
      />

      {/* Soil */}
      <CheckboxGroup
        label="Soil"
        name="soil"
        options={[
          {label: 'Dry', name: 'dry'},
          {label: 'Moist', name: 'moist'},
          {label: 'West', name: 'wet'},
        ]}
      />

      <input 
        type="submit" 
        value="Create!" 
        className={styles.button}
      />
    </form>
  )
}