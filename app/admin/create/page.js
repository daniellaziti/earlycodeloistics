"use client"
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { TextField,Button } from "@mui/material";
import { validation } from "@/utils/create_form_rules";
import { getTrackingId } from "@/utils/generate_tracking_id";
import { billing } from "@/utils/generate_billing";


export default function Create () {

    const [trackingId,setTrackingId] = useState("");
    const [bill,setBill] = useState(0);

    const { handleBlur,handleSubmit,handleChange,touched,errors,values } = useFormik ({
        initialValues:{title:"",description:"",origin:"",destination:"",senderFullName:"",senderPhone:"",weight:0,length:0,breadth:0,height:0,value:""},
        onSubmit: () => {

        },
        validationSchema:validation
    });

    useEffect(() => {
        if (touched.title & !errors.title) {
            setTrackingId(getTrackingId())
        }
    },[touched.title])

    useEffect(() => {
        if (!errors.weight & !errors.length & !errors.breadth & !errors.length) {
            setBill(billing(values.weight,values.length,values.breadth,values.height))
        }
    },[touched.height])

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
                        { touched.title && errors.title ? <span className="text-red-500 text-xs">{errors.title}</span> : null }
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
                        { touched.description && errors.title ? <span className="text-red-500 text-xs">{errors.title}</span> : null }
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
                        { touched.origin && errors.origin ? <span className="text-red-500 text-xs">{errors.origin}</span> : null }
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
                        { touched.destination && errors.destination ? <span className="text-red-500 text-xs">{errors.destination}</span> : null }
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
                        { touched.senderFullName && errors.senderFullName ? <span className="text-red-500 text-xs">{errors.senderFullName}</span> : null }
                    </div>
                    <div>
                        <TextField
                        className="w-full"
                        label="senderPhone"
                        type="tel"
                        id="senderPhone"
                        onBlur={handleBlur}
                        value={values.senderPhone}
                        onChange={handleChange}
                        />
                        { touched.senderPhone && errors.senderPhone ? <span className="text-red-500 text-xs">{errors.senderPhone}</span> : null }
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>   
                            <TextField
                                className="w-full"
                                label="weight"
                                type="number"
                                id="weight"
                                onBlur={handleBlur}
                                value={values.weight}
                                onChange={handleChange}
                                />
                                { touched.weight && errors.weight ? <span className="text-red-500 text-xs">{errors.weight}</span> : null }
                        </div>
                        <div>
                            <TextField
                                className="w-full"
                                label="length"
                                type="number"
                                id="length"
                                onBlur={handleBlur}
                                value={values.length}
                                onChange={handleChange}
                                />
                                { touched.length && errors.length ? <span className="text-red-500 text-xs">{errors.length}</span> : null }
                        </div>
                        <div>
                            <TextField
                                className="w-full"
                                label="breadth"
                                type="number"
                                id="breadth"
                                onBlur={handleBlur}
                                value={values.breadth}
                                onChange={handleChange}
                                />
                                { touched.breadth && errors.breadth ? <span className="text-red-500 text-xs">{errors.breadth}</span> : null }
                        </div>
                        <div>
                            <TextField
                                className="w-full"
                                label="height"
                                type="number"
                                id="height"
                                onBlur={handleBlur}
                                value={values.height}
                                onChange={handleChange}
                                />
                                { touched.height && errors.height ? <span className="text-red-500 text-xs">{errors.height}</span> : null }
                        </div>

                    </div>
                    <div>   
                            <TextField
                                className="w-full"
                                label="value"
                                type="number"
                                id="value"
                                onBlur={handleBlur}
                                value={values.value}
                                onChange={handleChange}
                                />
                                { touched.value && errors.value ? <span className="text-red-500 text-xs">{errors.value}</span> : null }
                        </div>

                    <Button variant="contained" type="submit">Create Package Tracking</Button>

                </form>

            </article>
            <aside className="hidden lg:flex flex-col gap-6 p-4 bg-gray-200 rounded-md">
                <div className="grid grid-cols-2 border border-gray-50 rounded-md">
                    <blockquote className="h-24 flex justify-center items-center border-r border-gray-50 p-4">
                        <p className="text-xl text-gray-800">Tracking ID</p>
                    </blockquote>
                    <blockquote className="h-24 flex justify-center items-center p-4" >
                        <p className="text-2xl text-gray-800">{trackingId}</p>
                    </blockquote>
                </div>

                <div className="flex flex-col gap-4">
                    <p className="text-gray-600 border-b border-gray-50 pb-2">
                        <span className="block text-gray-500">Title</span>
                        <span className="block">{values.title}</span>
                    </p>
                    <p className="text-gray-600 border-b border-gray-50 pb-2">
                        <span className="block text-gray-500">Description</span>
                        <span className="block">{values.description}</span>
                    </p>
                    <blockquote className="grid grid-cols1 lg:grid-cols-2 gap-4">
                        <p className="text-gray-600 border-b border-gray-50 pb-2">
                            <span className="block text-gray-500">Origin</span>
                            <span className="block">{values.origin}</span>
                        </p>    
                        <p className="text-gray-600 border-b border-gray-50 pb-2">
                        <span className="block text-gray-500">Destination</span>
                        <span className="block">{values.destination}</span>
                        </p>
                    </blockquote>
                    <blockquote className="grid grid-cols1 lg:grid-cols-2 gap-4">
                        <p className="text-gray-600 border-b border-gray-50 pb-2">
                            <span className="block text-gray-500">Sender&apos;s Full Name</span>
                            <span className="block">{values.senderFullName}</span>
                        </p>    
                        <p className="text-gray-600 border-b border-gray-50 pb-2">
                        <span className="block text-gray-500">Sender&apos;s Phone</span>
                        <span className="block">{values.senderPhone}</span>
                        </p>
                    </blockquote>
                    <blockquote className="grid grid-cols1 lg:grid-cols-4 gap-4">
                        <p className="text-gray-600 border-b border-gray-50 pb-2">
                            <span className="block text-gray-500">Weight</span>
                            <span className="block">{values.weight}</span>
                        </p>    
                        <p className="text-gray-600 border-b border-gray-50 pb-2">
                        <span className="block text-gray-500">Length</span>
                        <span className="block">{values.length}</span>
                        </p>
                        <p className="text-gray-600 border-b border-gray-50 pb-2">
                            <span className="block text-gray-500">Breadth</span>
                            <span className="block">{values.breadth}</span>
                        </p>    
                        <p className="text-gray-600 border-b border-gray-50 pb-2">
                        <span className="block text-gray-500">Height</span>
                        <span className="block">{values.height}</span>
                        </p>
                    </blockquote>
                    <p className="text-gray-600 border-b border-gray-50 pb-2">
                        <span className="block text-gray-500">Value</span>
                        <span className="block">{values.value}</span>
                    </p>
                    <p className="text-gray-600 border-b border-gray-50 pb-2">
                        <span className="block text-gray-500">Billing</span>
                        <span className="block">NGN{bill}</span>
                    </p>
                </div>
            </aside>
        </section>
    )
}