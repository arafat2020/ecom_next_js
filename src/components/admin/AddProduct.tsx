"use client"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { HTMLInputTypeAttribute } from 'react'
import { UseFormRegister, useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useRouter, useSearchParams } from 'next/navigation';

type Format = {
  name: string,
  value: any
}[]
interface CustomInputProp {
  register: UseFormRegister<any>
  name: string,
  title: string,
  prop: React.InputHTMLAttributes<HTMLInputElement>
}

interface CustomInputPropSelect {
  register: UseFormRegister<any>
  name: string,
  title: string,
  prop: "select",
  option: Format
  afterFn: (id: string) => void
  willMount: boolean
}

type FromSchema = CustomInputProp | CustomInputPropSelect
export function CustomInput(props: FromSchema) {
  // console.log(props);
  if (props.prop === "select" && props.willMount === true) {
    console.log(props.willMount,"mound");
    
    const { option, afterFn } = props
    // console.log(option,'op');
    
    return <div className="grid-cols-1 grid max-w-sm items-center gap-1.5">
      <Label>{props.title}</Label>
      <Select onValueChange={e => {
        if (afterFn) afterFn(e)
      }
      }>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={props.title} />
        </SelectTrigger>
        <SelectContent>
          {
            option.map(e => {
              return <SelectItem key={e.name} value={e.value}>{e.name}</SelectItem>
            })
          }
        </SelectContent>
      </Select>
    </div>
  } else {
    return (
      <div className="grid-cols-1 grid max-w-sm items-center gap-1.5">
        <Label>{props.title}</Label>
        <Input id="picture" type={props.prop as HTMLInputTypeAttribute} {...props.register(props.name)} />
      </div >
    )
  }

}

type Category = {
  id: string;
  name: string;
  subCategory: {
    id: string;
    name: string;
  }[];
}[]
function AddProduct({ category }: { category: Category }) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const searchParams = useSearchParams()

  const search = searchParams.get('category')
// console.log(search === null ? false: true, "0");

  function formatter(pram: Category, filter: string) {
    const arr: Format = []
    const subCategory = filter && pram.filter(e => {
      let subCategory: typeof e.subCategory | null
      
      subCategory = e.id === filter ? e.subCategory : null      
      subCategory?.map(e=>{
        arr.push({
          name: e.name,
          value: e.id
        })
      })
    })
    // console.log(arr,'arr');
    
    const categoryList: Format = []
    category?.map(e => {
      return categoryList.push({
        name: e.name,
        value: e.id
      })
    })
    return {
      categoryList,
      subCategory: arr
    }
  }
  console.log(formatter(category, search as string));
  const { push } = useRouter()
  const formSchema: FromSchema[] = [
    {
      name: "name",
      title: "Title",
      prop: {
        type: "text"
      },
      register
    },
    {
      name: "description",
      title: "Description",
      prop: {
        type: "text"
      },
      register
    },
    {
      name: "price",
      title: "Price",
      prop: {
        type: "number"
      },
      register
    },
    {
      name: "discount",
      title: "Discount",
      prop: {
        type: "number"
      },
      register
    },
    {
      name: "category",
      title: "Category",
      prop: "select",
      option: formatter(category, search as string).categoryList,
      afterFn: (id: string) => push(`/admin/product/add?category=${id}`),
      register,
      willMount: true
    },
    {
      name: "subCategory",
      title: "Sun Category",
      prop: "select",
      option: formatter(category, search as string).subCategory,
      register,
      afterFn(id) {
        return null
      },
      willMount: typeof(search) === "string"
    }
  ]
  return (
    <div className='p-6 bg-amber-50 rounded-l-3xl w-full'>
      <h1 className='font-sans font-medium text-slate-700 text-2xl'>Add Product</h1>
      <form action="" className=' w-full'>
        <div className='w-full grid grid-flow-col grid-cols-3 grid-rows-2 gap-3 mt-3'>
          {
            formSchema.map(e => {
              return <CustomInput
                name={e.name}
                /* @ts-ignore */
                prop={e.prop === "select" ? e.prop : e.prop.type}
                register={e.register}
                title={e.title}
                key={e.name}
                {...('afterFn' in e ? { afterFn: e.afterFn } : {})}
                {...('willMount' in e ? { willMount: e.willMount } : {})}
                {...('option' in e ? { option: e.option } : {})}
              />
            })
          }
        </div>
      </form>
    </div>
  )
}

export default AddProduct