"use client"
import { useFormik } from "formik";
import { TextField,Button } from "@mui/material"
import { validation } from "@/utils/create_form_rules";


export default function Create () {

    const { handleBlur,handleSubmit,handleChange,touched,errors,values } = useFormik ({
        initialValues:{title:"",description:"",origin:"",destination:"",senderFullName:"",senderPhone:"",weight:0,length:0,breadth:0,height:0,value:""},
        onSubmit: () => {

        },
        validationSchema:validation
    })

    return (
        <section className="lg:grid lg:grid-cols-2 lg:gap-12 px-4 md:px-8 lg:px-12">
            <article className="p-4 border border-gray-200 rounded-md">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    
                    <div>
                        <TextField
                        className="w-full"
                        label="Title"
                        type="text"
                        id="title"
                        onBlur={handleBlur}
                        value={values.title}
                        onChange={handleChange}
                        />
                        { touched && errors.title ? <span className="text-red-500 text-xs">{errors.title}</span> : null }
                    </div>
                    <div>
                        <TextField
                        className="w-full"
                        multiline={true}
                        rows={3}
                        label="Description"
                        type="text"
                        id="description"
                        onBlur={handleBlur}
                        value={values.description}
                        onChange={handleChange}
                        />

                    </div>
                    <div>
                        <TextField
                        className="w-full"
                        label="Origin"
                        type="text"
                        id="origin"
                        onBlur={handleBlur}
                        value={values.origin}
                        onChange={handleChange}
                        />
                        { touched && errors.origin ? <span className="text-red-500 text-xs">{errors.origin}</span> : null }
                    </div>
                    <div>
                        <TextField
                        className="w-full"
                        label="Destination"
                        type="text"
                        id="destination"
                        onBlur={handleBlur}
                        value={values.destination}
                        onChange={handleChange}
                        />
                        { touched && errors.destination ? <span className="text-red-500 text-xs">{errors.destination}</span> : null }
                    </div>
                    <div>
                        <TextField
                        className="w-full"
                        label="senderFullName"
                        type="text"
                        id="senderFullName"
                        onBlur={handleBlur}
                        value={values.senderFullName}
                        onChange={handleChange}
                        />
                        { touched && errors.senderFullName ? <span className="text-red-500 text-xs">{errors.senderFullName}</span> : null }
                    </div>
                    <div>
                        <TextField
                        className="w-full"
                        label="senderPhone"
                        type="text"
                        id="senderPhone"
                        onBlur={handleBlur}
                        value={values.senderPhone}
                        onChange={handleChange}
                        />
                        { touched && errors.senderPhone ? <span className="text-red-500 text-xs">{errors.senderPhone}</span> : null }
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>   
                            <TextField
                                className="w-full"
                                label="weight"
                                type="text"
                                id="weight"
                                onBlur={handleBlur}
                                value={values.weight}
                                onChange={handleChange}
                                />
                                { touched && errors.weight ? <span className="text-red-500 text-xs">{errors.weight}</span> : null }
                        </div>
                        <div>
                            <TextField
                                className="w-full"
                                label="length"
                                type="text"
                                id="length"
                                onBlur={handleBlur}
                                value={values.length}
                                onChange={handleChange}
                                />
                                { touched && errors.length ? <span className="text-red-500 text-xs">{errors.length}</span> : null }
                        </div>
                        <div>
                            <TextField
                                className="w-full"
                                label="breadth"
                                type="text"
                                id="breadth"
                                onBlur={handleBlur}
                                value={values.breadth}
                                onChange={handleChange}
                                />
                                { touched && errors.breadth ? <span className="text-red-500 text-xs">{errors.breadth}</span> : null }
                        </div>
                        <div>
                            <TextField
                                className="w-full"
                                label="height"
                                type="text"
                                id="height"
                                onBlur={handleBlur}
                                value={values.height}
                                onChange={handleChange}
                                />
                                { touched && errors.height ? <span className="text-red-500 text-xs">{errors.height}</span> : null }
                        </div>

                    </div>
                    <div>   
                            <TextField
                                label="value"
                                type="text"
                                id="Value"
                                onBlur={handleBlur}
                                value={values.value}
                                onChange={handleChange}
                                />
                                { touched && errors.value ? <span className="text-red-500 text-xs">{errors.value}</span> : null }
                        </div>

                    <Button variant="contained" type="submit">Create Package Tracking</Button>

                </form>

            </article>
            <aside className="hidden lg:block flex flex-col gap-6 p-4 bg-gray-200 rounded-md">
                <div className="grid grid-cols-2 border border-gray-50 rounded-md">
                    <blockquote className="h-24 flex justify-center items-center border-r border-gray-50 p-4">
                        <p className="text-xl text-gray-800">Tracking ID</p>
                    </blockquote>
                    <blockquote className="h-24 flex justify-center items-center p-4" >
                        <p className="text-2xl text-gray-800">------</p>
                    </blockquote>
                </div>

                <div className="flex flex-col gap-4">
                    <p className="text-gray-700 border-b border-gray-400 pb-2">{values.title}</p>
                </div>
            </aside>
        </section>
    )
}