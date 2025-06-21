import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { FormControl, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';

interface FormfeildProps<T extends FieldValues>{
        control: Control<T>,
        name: Path<T>,
        label : string,
        placeholder?: string,
        type?: 'text' | 'email' | 'password' | 'file';
    }

const Formfeild = ({control,name,label,placeholder,type="text"}:FormfeildProps<T>) => (
  <Controller name={name} control={control} render={({field})=>(
      <FormItem>
                <FormLabel className='label'>{label}</FormLabel>
                <FormControl>
                    <Input className='input' {...field} placeholder={placeholder} type={type} />
                </FormControl>
                <FormMessage />
            </FormItem>
  
           
        )}
    />
);

export default Formfeild