import { createSharedPlant } from '@/app/actions';
import styles from './styles.module.css';

interface InputProps {
  type?: string;
  name: string;
  label: string;
  required: boolean;
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

export function NewPlantForm() {
  return (
    <form action={createSharedPlant}>
      <Input 
        type="text" 
        name="commonName" 
        label="Common Name"
        required={true}
      />
      <Input 
        type="text" 
        name="latinName" 
        label="Latin Name"
        required={true}
      />
      <TextArea 
        name="description" 
        label="Describe What You've Got"
        required={true}
      />
      <input type="submit" value="Create!" />
    </form>
  )
}