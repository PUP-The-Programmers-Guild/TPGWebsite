import { ArrowUpRight } from '@phosphor-icons/react';
import * as Form from '@radix-ui/react-form';

export default function RegistrationFormRadix() {
    return (
        <Form.Root
            onSubmit={(event) => {
                event.preventDefault();
                const data = Object.fromEntries(new FormData(event.currentTarget));
                console.log(data)
            }} 
        >
            <div className="flex flex-col gap-y-14  mt-10 mb-14">
                <div>
                    <span className="text-white text-4xl font-bold">Basic Information</span>
                    <div className="grid grid-cols-3 gap-x-12">
                        <Form.Field name="first-name">
                            <div className="flex items-baseline justify-between">
                                <Form.Label className="text-[15px] font-medium leading-[35px] text-white">First Name</Form.Label>
                            </div>
                            <Form.Control asChild>
                                <input
                                    className="box-border w-full shadow-black inline-flex h-[35px] appearance-none items-center justify-center  px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                                    type="text"
                                />
                            </Form.Control>
                        </Form.Field>
                        <Form.Field name="middle-initial">
                            <div className="flex items-baseline justify-between">
                                <Form.Label className="text-[15px] font-medium leading-[35px] text-white">Middle Initial</Form.Label>
                            </div>
                            <Form.Control asChild>
                                <input
                                    className="box-border w-full shadow-black inline-flex h-[35px] appearance-none items-center justify-center  px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                                    type="text"
                                />
                            </Form.Control>
                        </Form.Field>
                        <Form.Field name="last-name">
                            <div className="flex items-baseline justify-between">
                                <Form.Label className="text-[15px] font-medium leading-[35px] text-white">Last Name</Form.Label>
                            </div>
                            <Form.Control asChild>
                                <input
                                    className="box-border w-full shadow-black inline-flex h-[35px] appearance-none items-center justify-center  px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                                    type="text"
                                />
                            </Form.Control>
                        </Form.Field>
                        <div className="">
                            <Form.Field name="birthdate">
                                <Form.Label className="text-white">Birthdate</Form.Label>
                                <div className="grid grid-cols-3 gap-x-5">
                                    <Form.Control asChild>
                                        <select>
                                            <option value="01">01</option>
                                        </select>
                                    </Form.Control>
                                </div>
                            </Form.Field>
                        </div>
                        <Form.Field name="email">
                            <div className="flex items-baseline justify-between">
                                <Form.Label className="text-[15px] font-medium leading-[35px] text-white">Email</Form.Label>
                            </div>
                            <Form.Control asChild>
                                <input
                                    className="box-border w-full shadow-black inline-flex h-[35px] appearance-none items-center justify-center  px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                                    type="email"
                                />
                            </Form.Control>
                        </Form.Field>
                        <Form.Field name="contact-number">
                            <div className="flex items-baseline justify-between">
                                <Form.Label className="text-[15px] font-medium leading-[35px] text-white">Contact Number</Form.Label>
                            </div>
                            <Form.Control asChild>
                                <input
                                    className="box-border w-full shadow-black inline-flex h-[35px] appearance-none items-center justify-center  px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                                    type="tel"
                                />
                            </Form.Control>
                        </Form.Field>
                    </div>
                </div>

                <div>
                    <span className="text-white text-4xl font-bold">Education</span>
                    <div className="grid grid-cols-4 gap-x-12">
                        <Form.Field name="PUP-branch">
                            <div className="flex items-baseline justify-between ">
                                <Form.Label className="text-[15px] font-medium leading-[35px] text-white">PUP Branch</Form.Label>
                            </div>
                            <Form.Control asChild>
                                <select>
                                    <option value="STA. MESA">STA. MESA</option>
                                </select>
                            </Form.Control>
                        </Form.Field>
                        <Form.Field name="student-number">
                            <div className="flex items-baseline justify-between">
                                <Form.Label className="text-[15px] font-medium leading-[35px] text-white">Student Number</Form.Label>
                            </div>
                            <Form.Control asChild>
                                <input
                                    className="box-border w-full shadow-black inline-flex h-[35px] appearance-none items-center justify-center  px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                                    type="text"
                                />
                            </Form.Control>
                        </Form.Field>
                        <Form.Field name="program">
                            <div className="flex items-baseline justify-between">
                                <Form.Label className="text-[15px] font-medium leading-[35px] text-white">Program</Form.Label>
                            </div>
                            <Form.Control asChild>
                                <input
                                    className="box-border w-full shadow-black inline-flex h-[35px] appearance-none items-center justify-center  px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                                    type="text"
                                />
                            </Form.Control>
                        </Form.Field>
                        <Form.Field name="year-section">
                            <div className="flex items-baseline justify-between">
                                <Form.Label className="text-[15px] font-medium leading-[35px] text-white">Year and Section</Form.Label>
                            </div>
                            <Form.Control asChild>
                                <input
                                    className=" w-full shadow-black inline-flex h-[35px] appearance-none items-center justify-center  px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                                    type="text"
                                />
                            </Form.Control>
                        </Form.Field>
                    </div>
                </div>

                <div>
                    <span className="text-white text-4xl font-bold">Others</span>
                    <div className="grid grid-cols-2 gap-x-12">
                        <div>
                            <span className="text-white text-xl">Name of other organization(s)</span>
                        </div>
                        <div>
                            <span className="text-white text-xl">Skills</span>
                        </div>
                    </div>
                </div>

                <div>
                    <Form.Field name="agreement">
                        <div className="flex flex-row gap-x-5">
                            <Form.Control asChild>
                                <input type="checkbox" />
                            </Form.Control>
                            <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
                                I agree with terms and conditions
                            </Form.Label>
                        </div>
                    </Form.Field>
                </div>

                <Form.Submit asChild>
                    <button type="submit" className="flex flex-row gap-x-2 items-center justify-center bg-white py-3" >
                        <span className="text-black text-3xl font-bold">SUBMIT</span>
                        <ArrowUpRight size={40} weight="bold" />
                    </button>
                </Form.Submit>

            </div>
        </Form.Root>
    )
}