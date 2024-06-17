"use client"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { HTMLInputTypeAttribute, useRef, useState } from 'react'
import { UseFormRegister, useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useRouter, useSearchParams } from 'next/navigation';
import { UploadButton } from '@/lib/uploadthing';
import { serverClient } from '@/app/_trpc/serverClient';
import { trpc } from '@/app/_trpc/client';
import { useToast } from '../ui/use-toast';

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
    console.log(props.willMount, "mound");

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
  const [img, setImg] = useState<string | null>(null)
  const [showCaseImg, setSHowCaseImage] = useState<string[]>([])
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const searchParams = useSearchParams();
  const [subCategoryID, setSubCategoryID] = useState<string>("")
  const ref = useRef<HTMLFormElement>(null)
  const addPRoduct = trpc.postProduct.useMutation({
    onSuccess:()=>{
      ref.current?.reset()
      setImg("");
      setSHowCaseImage([])
      toast({
        title:"Product added",
        description: "Successfully add new PRoduct"
      })
    }, onError: (error)=>{      
      toast({
        title:"Failed Product added",
        description: error.message.toString()
      })
    }
  });
  const search = searchParams.get('category');
  const { toast } = useToast()

  function formatter(pram: Category, filter: string) {
    const arr: Format = []
    const subCategory = filter && pram.filter(e => {
      let subCategory: typeof e.subCategory | null

      subCategory = e.id === filter ? e.subCategory : null
      subCategory?.map(e => {
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
      title: "Sub Category",
      prop: "select",
      option: formatter(category, search as string).subCategory,
      register,
      afterFn(id) {
        setSubCategoryID(id)
      },
      willMount: typeof (search) === "string"
    }
  ]
  async function onSubmit(data: any) {
    
      await addPRoduct.mutate({
        name: data.name,
        catagoryId: search as string,
        description: data.description,
        discount: parseInt(data.discount),
        price: parseInt(data.price),
        primaryImg: img as string,
        showcaseImg: showCaseImg,
        subCategoryId: subCategoryID
      })
    
  }
  return (
    <div className='p-6 bg-amber-50 rounded-l-3xl w-full'>
      <h1 className='font-sans font-medium text-slate-700 text-2xl'>Add Product</h1>
      <form ref={ref} onSubmit={handleSubmit(onSubmit)} className=' w-full'>
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
        <button type='submit' className='bg-indigo-700 text-white text-lg px-2 rounded-lg py-1 m-3'>Add</button>
      </form>
      <div>

        <div className='flex space-x-3 '>
          <div className='flex flex-col space-y-2 mt-3 w-fit bg-amber-300 rounded-md p-3'>
            <Label>Upload Product Image</Label>
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                // Do something with the response
                console.log("Files: ", res);
                alert("Upload Completed");
                setImg(res[0].url)
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
              }}
            />
          </div>
          <div className='flex flex-col space-y-2 mt-3 w-fit bg-amber-300 rounded-md p-3'>
            <Label>Upload Product showCaseImg Image</Label>
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                // Do something with the response
                console.log("Files: ", res);
                alert("Upload Completed");
                setSHowCaseImage(state => [...state, res[0].url])
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
              }}
            />
          </div>
        </div>
        <div className='w-full h-[180px] grid grid-cols-10 grid-rows-2 gap-3 mt-3'>
          {
            img ? <div style={{
              backgroundImage: `url(${img})`
            }} className='col-span-2 bg-center row-span-2 rounded-lg flex justify-around items-center p-1 bg-amber-300'>
            </div> : null
          }
          {
            showCaseImg.map(e => {
              return <div key={e} style={{
                backgroundImage: `url(${e})`
              }} className='col-span-1 bg-center row-span-1 rounded-lg flex justify-around items-center p-1 bg-amber-300'>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default AddProduct