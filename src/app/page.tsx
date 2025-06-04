"use client";

import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { FiUser, FiMail, FiPhone, FiHome, FiDollarSign, FiCheckCircle, FiHeart, FiUsers, FiMapPin, FiGlobe, FiMenu, FiX, FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const borrowerSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    residenceType: z.enum(["Owned", "Rented", "Other"]),
    monthlyIncome: z.number().min(1, "Monthly income must be greater than 0"),
    previousLoan: z.enum(["Yes", "No"]),
    maritalStatus: z.enum(["Single", "Married", "Divorced", "Widowed"]),
    numberOfDependencies: z.number().min(0, "Number of dependencies cannot be negative"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
});

type BorrowerFormData = z.infer<typeof borrowerSchema>;

type FormErrors = {
    [key: string]: string[];
};

type ApiError = {
    message: string;
    errors?: FormErrors;
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            className="flex-shrink-0 flex items-center"
                        >
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">L</span>
                            </div>
                            <span className="ml-2 text-white font-semibold text-lg">LoanFlow</span>
                        </motion.div>
                    </div>
                    
                    <div className="hidden md:flex items-center space-x-8">
                        {['Home', 'About', 'Services', 'Contact'].map((item) => (
                            <motion.a
                                key={item}
                                href="#"
                                whileHover={{ scale: 1.05 }}
                                className="text-white/80 hover:text-white transition-colors duration-200"
                            >
                                {item}
                            </motion.a>
                        ))}
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white/80 hover:text-white"
                        >
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden backdrop-blur-xl bg-black/30 border-t border-white/10"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {['Home', 'About', 'Services', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="block px-3 py-2 text-white/80 hover:text-white transition-colors duration-200"
                                >
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
                        <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">L</span>
                            </div>
                            <span className="ml-2 text-white font-semibold text-lg">LoanFlow</span>
                        </div>
                        <p className="text-white/60 mb-4">
                            Empowering your financial journey with seamless loan applications and transparent processes.
                        </p>
                        <div className="flex space-x-4">
                            {[FiTwitter, FiLinkedin, FiGithub].map((Icon, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    whileHover={{ scale: 1.1 }}
                                    className="text-white/60 hover:text-white transition-colors duration-200"
                                >
                                    <Icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {['About Us', 'Services', 'Privacy Policy', 'Terms of Service'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2 text-white/60">
                            <li>support@loanflow.com</li>
                            <li>+1 (555) 123-4567</li>
                            <li>123 Finance Street</li>
                            <li>New York, NY 10001</li>
                        </ul>
                    </div>
                </div>
                
                <div className="border-t border-white/10 mt-8 pt-8 text-center">
                    <p className="text-white/60">
                        © 2025 LoanFlow. All rights reserved.
                    </p>
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
            setSubmissionMessage("Sign-up successful! Welcome to LoanFlow!");
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

    const handleSubmit = async () => {
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
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            
            <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>

            <Navbar />

            <div className="relative z-10 pt-24 pb-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                            Join <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">LoanFlow</span>
                        </h1>
                        <p className="text-xl text-white/70 max-w-2xl mx-auto">
                            Start your financial journey with us. Quick, secure, and transparent loan applications.
                        </p>
                    </motion.div>

                    <div className="flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="backdrop-blur-xl bg-white/10 p-8 md:p-12 rounded-3xl shadow-2xl border border-white/20 w-full max-w-2xl"
                        >
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold text-white mb-2">Create Your Account</h2>
                                <p className="text-white/60">Fill in your details to get started</p>
                            </div>

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <InputField label="Full Name" name="name" icon={FiUser} formData={formData} handleChange={handleChange} errors={errors} />
                                    <InputField label="Email Address" name="email" type="email" icon={FiMail} formData={formData} handleChange={handleChange} errors={errors} />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <InputField label="Phone Number" name="phone" type="tel" icon={FiPhone} formData={formData} handleChange={handleChange} errors={errors} />
                                    <InputField label="Residence Type" name="residenceType" icon={FiHome} options={["Owned", "Rented", "Other"]} formData={formData} handleChange={handleChange} errors={errors} />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <InputField label="Monthly Income ($)" name="monthlyIncome" type="number" icon={FiDollarSign} formData={formData} handleChange={handleChange} errors={errors} />
                                    <InputField label="Previous Loan History" name="previousLoan" icon={FiCheckCircle} options={["Yes", "No"]} formData={formData} handleChange={handleChange} errors={errors} />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <InputField label="Marital Status" name="maritalStatus" icon={FiHeart} options={["Single", "Married", "Divorced", "Widowed"]} formData={formData} handleChange={handleChange} errors={errors} />
                                    <InputField label="Number of Dependents" name="numberOfDependencies" type="number" icon={FiUsers} formData={formData} handleChange={handleChange} errors={errors} />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <InputField label="City" name="city" icon={FiMapPin} formData={formData} handleChange={handleChange} errors={errors} />
                                    <InputField label="State" name="state" icon={FiGlobe} formData={formData} handleChange={handleChange} errors={errors} />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleSubmit}
                                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-8 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-purple-500/25 focus:outline-none focus:ring-4 focus:ring-purple-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={mutation.isPending}
                                >
                                    {mutation.isPending ? (
                                        <div className="flex items-center justify-center">
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                                            Processing...
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
                                            className={`p-4 rounded-xl text-center font-medium ${
                                                submissionMessage.includes("successful") 
                                                    ? "bg-green-500/20 text-green-300 border border-green-500/30" 
                                                    : "bg-red-500/20 text-red-300 border border-red-500/30"
                                            }`}
                                        >
                                            {submissionMessage}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </div>
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
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-2"
    >
        <label htmlFor={name} className="block text-sm font-medium text-white/90">
            {label}
        </label>
        <div className="relative">
            {Icon && (
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <Icon className="h-5 w-5 text-white/50" />
                </div>
            )}
            {options ? (
                <select
                    id={name}
                    name={name}
                    value={formData[name] as string}
                    onChange={handleChange}
                    className={`w-full backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl py-3 pr-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 ${
                        Icon ? "pl-12" : "pl-4"
                    } ${errors[name] ? "border-red-400/50 focus:ring-red-400/50" : ""}`}
                >
                    {options.map(option => (
                        <option key={option} value={option} className="bg-gray-800 text-white">
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
                    className={`w-full backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl py-3 pr-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 ${
                        Icon ? "pl-12" : "pl-4"
                    } ${errors[name] ? "border-red-400/50 focus:ring-red-400/50" : ""}`}
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
                    className="text-red-400 text-sm flex items-center"
                >
                    <span className="w-4 h-4 mr-1">⚠</span>
                    {errors[name][0]}
                </motion.p>
            )}
        </AnimatePresence>
    </motion.div>
);