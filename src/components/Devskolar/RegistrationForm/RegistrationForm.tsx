import { ArrowUpRight, MinusSquare, PlusSquare } from "@phosphor-icons/react";
import { FieldErrors, useForm, useFieldArray } from "react-hook-form";
import { useRegistrationFormContext } from "./RegistrationFormContext";
import { FormInput } from "@/components/base/FormInput";
import { FormLabel } from "@/components/base/FormLabel";

enum PUPBranchEnum {
    "Sta. Mesa" = "STA. MESA",
    "Taguig" = "TAGUIG",
    "Quezon City" = "QUEZON CITY",
    "San Juan" = "SAN JUAN",
    "Parañaque" = "PARAÑAQUE",
    "Bataan" = "BATAAN",
    "Sta. Maria" = "STA. MARIA",
    "Sto. Tomas" = "STO. TOMAS",
}

type RegistrationFormValues = {
    "first-name": string,
    "middle-initial": string,
    "last-name": string,
    "email": string,
    "contact-number": string,
    "PUP-branch": PUPBranchEnum,
    "student-number": string,
    "program": string,
    "year-section": string,
    "organizations": {
        "org-name": string
    }[],
    "skills": {
        "skill-name": string
    }[],
    "agreement": boolean,
}

export default function RegistrationForm() {
    const {formActive, setFormActive} = useRegistrationFormContext()  
    const form = useForm<RegistrationFormValues>({
        defaultValues: {
            "first-name": "",
            "middle-initial": "",
            "last-name": "",
            "email": "",
            "contact-number": "",
            "PUP-branch": PUPBranchEnum["Sta. Mesa"],
            "student-number": "",
            "program": "",
            "year-section": "",
            "organizations": [],
            "skills": [],
            "agreement": false,
        },
        mode: "onBlur",
    })

    const {
        register, control, handleSubmit, formState,
        watch, getValues, setValue, reset, trigger,
    } = form;

    const { fields : orgFields, append : appendOrg, remove : removeOrg } = useFieldArray({
        name: "organizations",
        control
    })

    const { fields : skillFields, append : appendSkill, remove : removeSkill } = useFieldArray({
        name: "skills",
        control
    })

    const {
        errors, isDirty, touchedFields, dirtyFields, isValid, 
        isSubmitting, isSubmitted, isSubmitSuccessful, submitCount,
    } = formState;

    const onSubmit = (data: RegistrationFormValues) => {
        console.log("Form submitted", data);
        setFormActive(false);
    };

    const onError = (errors: FieldErrors<RegistrationFormValues>) => {
        console.log("Form errors", errors);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit, onError)}
        >
            <div className="flex flex-col gap-y-14  mt-10 mb-14">
                <div>
                    <span className="text-white text-4xl font-bold">Basic Information</span>
                    <div className="grid grid-cols-3 gap-x-12">
                        <div>
                            <div className="flex items-baseline justify-between">
                                <FormLabel intent="default" htmlFor="first-name">First Name</FormLabel>
                            </div>
                            <FormInput
                                intent="default"
                                {...register("first-name", )}
                            />
                        </div>
                        <div>
                            <div className="flex items-baseline justify-between">
                                <FormLabel htmlFor="middle-initial" intent="default">Middle Initial</FormLabel>
                            </div>
                            <FormInput
                                intent="default"
                                {...register("middle-initial", )}
                            />
                        </div>
                        <div>
                            <div className="flex items-baseline justify-between">
                                <FormLabel htmlFor="last-name" intent="default">Last Name</FormLabel>
                            </div>
                            <FormInput
                                intent="default"
                                {...register("last-name", )}
                            />
                        </div>
                        <div className="">
                            <div className="flex items-baseline justify-between">
                                <FormLabel htmlFor="last-name">Birthday</FormLabel>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-baseline justify-between">
                                <FormLabel htmlFor="email" intent="default">Email</FormLabel>
                            </div>
                            <FormInput
                                intent="default"
                                {...register("email", )}
                            />
                        </div>
                        <div>
                            <div className="flex items-baseline justify-between">
                                <FormLabel htmlFor="contact-number" intent="default">Contact Number</FormLabel>
                            </div>
                            <FormInput
                                intent="default"
                                {...register("contact-number", )}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <span className="text-white text-4xl font-bold">Education</span>
                    <div className="grid grid-cols-4 gap-x-12">
                        <div className="flex flex-col">
                            <div className="flex items-baseline justify-between ">
                                <FormLabel htmlFor="PUP-branch" intent="default">PUP Branch</FormLabel>
                            </div>
                            <select className="flex flex-1" {...register("PUP-branch", )}>
                                {Object.values(PUPBranchEnum).map((branch) => (
                                    <option key={branch} value={branch}>
                                        {branch}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <div className="flex items-baseline justify-between">
                                <FormLabel htmlFor="student-number" intent="default">Student Number</FormLabel>
                            </div>
                            <FormInput
                                {...register("student-number", )}
                            />
                        </div>
                        <div>
                            <div className="flex items-baseline justify-between">
                                <FormLabel htmlFor="program" intent="default">Program</FormLabel>
                            </div>
                            <FormInput
                                {...register("program", )}
                            />
                        </div>
                        <div>
                            <div className="flex items-baseline justify-between">
                                <FormLabel htmlFor="year-section">Year and Section</FormLabel>
                            </div>
                            <FormInput
                                {...register("year-section", )}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <span className="text-white text-4xl font-bold">Others</span>
                    <div className="grid grid-cols-2 gap-x-12">
                        <div className="flex flex-col gap-y-2">
                            <FormLabel className="text-xl">Name of other organization(s)</FormLabel>
                            {orgFields.map((field, index) => (
                                <div key={field.id} className="flex flex-row gap-x-5">
                                    <FormInput className="flex flex-1" intent="default" {...register(`organizations.${index}.org-name`, )}/>
                                    <button type="button" onClick={() => removeOrg(index)}>
                                        <MinusSquare size={32} weight="duotone" />
                                    </button>
                                </div>
                            ))}
                            <div className="flex flex-row gap-x-5">
                                <FormInput className="flex flex-1" role="div" placeholder="Add Org" disabled/>
                                <button type="button" onClick={() => appendOrg({"org-name": ""})}>
                                    <PlusSquare size={32} weight="duotone" />
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <FormLabel className="text-xl">Skills</FormLabel>
                            {skillFields.map((field, index) => (
                                <div key={field.id} className="flex flex-row gap-x-5">
                                    <FormInput className="flex flex-1" intent="default" {...register(`skills.${index}.skill-name`, )}/>
                                    <button type="button" onClick={() => removeSkill(index)}>
                                        <MinusSquare size={32} weight="duotone" />
                                    </button>
                                </div>
                            ))}
                            <div className="flex flex-row gap-x-5">
                                <FormInput className="flex flex-1" intent="default" role="div" placeholder="Add Skill" disabled/>
                                <button type="button" onClick={() => appendSkill({"skill-name": ""})}>
                                    <PlusSquare size={32} weight="duotone" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <div className="flex flex-row gap-x-5">
                            <FormInput {...register("agreement", )} type="checkbox" intent="checkbox"/>
                            <FormLabel htmlFor="agreement" className="text-[20px]">
                                I agree with terms and conditions
                            </FormLabel>
                        </div>
                    </div>
                </div>

                <button type="submit" className="flex flex-row gap-x-2 items-center justify-center bg-white py-3 hover:bg-[#E6F5D6]" >
                    <span className="text-black text-3xl font-bold">SUBMIT</span>
                    <ArrowUpRight size={40} weight="bold" />
                </button>
            </div>
        </form>
    )
}