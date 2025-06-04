"use client";

import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { borrowerSchema, BorrowerFormData, ApiError } from "@/lib/schemas";
import { FiUser, FiMail, FiPhone, FiHome, FiDollarSign, FiCheckCircle, FiHeart, FiUsers, FiMapPin, FiGlobe, FiMenu, FiX, FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

type FormErrors = {
    [key: string]: string[];
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        LoanCorp
                    </motion.div>

                    <div className="hidden md:flex space-x-8">
                        {["Home", "About", "Services", "Contact"].map(item => (
                            <motion.a key={item} href="#" whileHover={{ scale: 1.1 }} className="text-white/80 hover:text-white transition-colors duration-200">
                                {item}
                            </motion.a>
                        ))}
                    </div>

                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white/80 hover:text-white transition-colors">
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden backdrop-blur-xl bg-black/30 border-t border-white/10">
                        <div className="px-4 py-4 space-y-4">
                            {["Home", "About", "Services", "Contact"].map(item => (
                                <a key={item} href="#" className="block text-white/80 hover:text-white transition-colors duration-200">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

const Footer = () => {
    return (
        <footer className="backdrop-blur-xl bg-black/20 border-t border-white/10 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                            LoanCorp
                        </motion.div>
                        <p className="text-white/60 mb-6 max-w-md">Empowering your financial future with innovative lending solutions and personalized service.</p>
                        <div className="flex space-x-4">
                            {[FiGithub, FiTwitter, FiLinkedin].map((Icon, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-10 h-10 rounded-full backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all duration-300">
                                    <Icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <div className="space-y-2">
                            {["About Us", "Loan Types", "Apply Now", "FAQ"].map(item => (
                                <motion.a key={item} href="#" whileHover={{ x: 5 }} className="block text-white/60 hover:text-white transition-all duration-200">
                                    {item}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Support</h3>
                        <div className="space-y-2">
                            {["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"].map(item => (
                                <motion.a key={item} href="#" whileHover={{ x: 5 }} className="block text-white/60 hover:text-white transition-all duration-200">
                                    {item}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-8 pt-8 text-center">
                    <p className="text-white/40">© 2025 LoanCorp. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default function SignUpPage() {
    const [formData, setFormData] = useState<BorrowerFormData>({
        name: "",
        email: "",
        phone: "",
        residenceType: "Owned",
        monthlyIncome: 0,
        previousLoan: "No",
        maritalStatus: "Single",
        numberOfDependencies: 0,
        city: "",
        state: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [submissionMessage, setSubmissionMessage] = useState<string | null>(null);

    const mutation = useMutation({
        mutationFn: async (data: BorrowerFormData) => {
            const response = await fetch("/api/borrower-signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Something went wrong");
            }

            return response.json();
        },
        onSuccess: data => {
            setSubmissionMessage("Sign-up successful! Data received: " + JSON.stringify(data.data));
            setErrors({});
            setFormData({
                name: "",
                email: "",
                phone: "",
                residenceType: "Owned",
                monthlyIncome: 0,
                previousLoan: "No",
                maritalStatus: "Single",
                numberOfDependencies: 0,
                city: "",
                state: "",
            });
        },
        onError: (error: Error) => {
            try {
                const parsedError: ApiError = JSON.parse(error.message);
                if (parsedError.errors) {
                    setErrors(parsedError.errors);
                    setSubmissionMessage("Please correct the errors in the form.");
                } else {
                    setSubmissionMessage(parsedError.message || "An unexpected error occurred.");
                }
            } catch {
                setSubmissionMessage(error.message || "An unexpected error occurred.");
            }
        },
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "number" ? parseFloat(value) : value,
        }));
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleSubmit = async (e: React.MouseEvent) => {
        e.preventDefault();
        setSubmissionMessage(null);
        setErrors({});

        try {
            borrowerSchema.parse(formData);
            mutation.mutate(formData);
        } catch (err) {
            if (err instanceof z.ZodError) {
                setErrors(err.flatten().fieldErrors as FormErrors);
                setSubmissionMessage("Please correct the errors in the form.");
            } else {
                setSubmissionMessage("An unexpected error occurred during validation.");
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
            </div>

            <Navbar />

            <div className="flex items-center justify-center pt-24 pb-12 px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                        <div className="relative p-8 sm:p-12">
                            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-center mb-8">
                                <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-4">Join LoanCorp</h1>
                                <p className="text-white/70 text-lg">Start your financial journey with us today</p>
                            </motion.div>

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <InputField label="Full Name" name="name" icon={FiUser} formData={formData} handleChange={handleChange} errors={errors} />
                                    <InputField label="Email Address" name="email" type="email" icon={FiMail} formData={formData} handleChange={handleChange} errors={errors} />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <InputField label="Phone Number" name="phone" type="tel" icon={FiPhone} formData={formData} handleChange={handleChange} errors={errors} />
                                    <InputField
                                        label="Residence Type"
                                        name="residenceType"
                                        icon={FiHome}
                                        options={["Owned", "Rented", "Other"]}
                                        formData={formData}
                                        handleChange={handleChange}
                                        errors={errors}
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <InputField label="Monthly Income" name="monthlyIncome" type="number" icon={FiDollarSign} formData={formData} handleChange={handleChange} errors={errors} />
                                    <InputField
                                        label="Previous Loan"
                                        name="previousLoan"
                                        icon={FiCheckCircle}
                                        options={["Yes", "No"]}
                                        formData={formData}
                                        handleChange={handleChange}
                                        errors={errors}
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <InputField
                                        label="Marital Status"
                                        name="maritalStatus"
                                        icon={FiHeart}
                                        options={["Single", "Married", "Divorced", "Widowed"]}
                                        formData={formData}
                                        handleChange={handleChange}
                                        errors={errors}
                                    />
                                    <InputField label="Dependencies" name="numberOfDependencies" type="number" icon={FiUsers} formData={formData} handleChange={handleChange} errors={errors} />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <InputField label="City" name="city" icon={FiMapPin} formData={formData} handleChange={handleChange} errors={errors} />
                                    <InputField label="State" name="state" icon={FiGlobe} formData={formData} handleChange={handleChange} errors={errors} />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -12px rgba(147, 51, 234, 0.4)" }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleSubmit}
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                                    disabled={mutation.isPending}>
                                    {mutation.isPending ? (
                                        <div className="flex items-center justify-center space-x-2">
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            <span>Processing...</span>
                                        </div>
                                    ) : (
                                        "Create Account"
                                    )}
                                </motion.button>

                                <AnimatePresence>
                                    {submissionMessage && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className={`p-4 rounded-xl backdrop-blur-md border ${
                                                submissionMessage.includes("successful") ? "bg-green-500/20 border-green-500/30 text-green-200" : "bg-red-500/20 border-red-500/30 text-red-200"
                                            }`}>
                                            {submissionMessage}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
}

type InputFieldProps = {
    label: string;
    name: keyof BorrowerFormData;
    type?: string;
    icon?: React.ElementType;
    options?: string[];
    formData: BorrowerFormData;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    errors: FormErrors;
};

const InputField = ({ label, name, type = "text", icon: Icon, options, formData, handleChange, errors }: InputFieldProps) => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="space-y-2">
        <label htmlFor={name} className="block text-sm font-medium text-white/90">
            {label}
        </label>
        <div className="relative group">
            {Icon && (
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 z-10">
                    <Icon className="h-5 w-5 text-white/50 group-focus-within:text-white/80 transition-colors duration-200" />
                </div>
            )}
            {options ? (
                <select
                    id={name}
                    name={name}
                    value={formData[name] as string}
                    onChange={handleChange}
                    className={`block w-full rounded-xl backdrop-blur-md bg-white/10 border border-white/20 py-3 pr-4 text-white placeholder-white/50 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 focus:outline-none transition-all duration-200 hover:bg-white/15 ${
                        Icon ? "pl-12" : "pl-4"
                    }`}>
                    {options.map(option => (
                        <option key={option} value={option} className="bg-gray-900 text-white">
                            {option}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    type={type}
                    id={name}
                    name={name}
                    value={formData[name] as string | number}
                    onChange={handleChange}
                    className={`block w-full rounded-xl backdrop-blur-md bg-white/10 border border-white/20 py-3 pr-4 text-white placeholder-white/50 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 focus:outline-none transition-all duration-200 hover:bg-white/15 ${
                        Icon ? "pl-12" : "pl-4"
                    }`}
                    placeholder={`Enter your ${label.toLowerCase()}`}
                />
            )}
        </div>
        <AnimatePresence>
            {errors[name] && (
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm text-red-300 bg-red-500/10 border border-red-500/20 rounded-lg p-2 backdrop-blur-sm">
                    {errors[name][0]}
                </motion.p>
            )}
        </AnimatePresence>
    </motion.div>
);
