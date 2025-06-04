"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FiUser,
    FiMail,
    FiPhone,
    FiHome,
    FiDollarSign,
    FiCheckCircle,
    FiHeart,
    FiUsers,
    FiMapPin,
    FiGlobe,
    FiMenu,
    FiX,
    FiGithub,
    FiTwitter,
    FiLinkedin,
    FiShield,
    FiTrendingUp,
    FiAward,
} from "react-icons/fi";
import { ZodError } from "zod";
import { borrowerSchema, BorrowerFormData } from "@/lib/schemas";

type FormErrors = {
    [key: string]: string[];
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-gray-950/80 border-b border-gray-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-18">
                    <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                            <FiShield className="text-white text-lg" />
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">LoanCorp</span>
                    </motion.div>

                    <div className="hidden md:flex space-x-8">
                        {["Home", "About", "Services", "Contact"].map(item => (
                            <motion.a key={item} href="#" whileHover={{ y: -2 }} className="text-gray-300 hover:text-white transition-all duration-300 font-medium relative group">
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                            </motion.a>
                        ))}
                    </div>

                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800/50">
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
                        className="md:hidden backdrop-blur-2xl bg-gray-950/90 border-t border-gray-800/50">
                        <div className="px-4 py-6 space-y-4">
                            {["Home", "About", "Services", "Contact"].map(item => (
                                <motion.a
                                    key={item}
                                    href="#"
                                    whileHover={{ x: 10 }}
                                    className="block text-gray-300 hover:text-white transition-all duration-200 py-2 px-4 rounded-lg hover:bg-gray-800/30">
                                    {item}
                                </motion.a>
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
        <footer className="backdrop-blur-2xl bg-gray-950/80 border-t border-gray-800/50 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                                <FiShield className="text-white text-xl" />
                            </div>
                            <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">LoanCorp</span>
                        </div>
                        <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
                            Empowering your financial future with innovative lending solutions, cutting-edge technology, and personalized service that puts you first.
                        </p>
                        <div className="flex space-x-4">
                            {[FiGithub, FiTwitter, FiLinkedin].map((Icon, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-12 h-12 rounded-xl backdrop-blur-md bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                                    <Icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6 text-lg">Quick Links</h3>
                        <div className="space-y-3">
                            {["About Us", "Loan Types", "Apply Now", "FAQ"].map(item => (
                                <motion.a key={item} href="#" whileHover={{ x: 5 }} className="block text-gray-400 hover:text-white transition-all duration-200 py-1">
                                    {item}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6 text-lg">Support</h3>
                        <div className="space-y-3">
                            {["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"].map(item => (
                                <motion.a key={item} href="#" whileHover={{ x: 5 }} className="block text-gray-400 hover:text-white transition-all duration-200 py-1">
                                    {item}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800/50 mt-12 pt-8 text-center">
                    <p className="text-gray-500">© 2025 LoanCorp. All rights reserved. Built with security and trust in mind.</p>
                </div>
            </div>
        </footer>
    );
};

type FeatureCardProps = {
    icon: React.ElementType;
    title: string;
    description: string;
};

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
    <motion.div whileHover={{ y: -5, scale: 1.02 }} className="bg-gray-800/30 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
            <Icon className="text-white text-xl" />
        </div>
        <h3 className="text-white font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
);

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
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "number" ? parseFloat(value) || 0 : value,
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
        setIsLoading(true);

        try {
            borrowerSchema.parse(formData);

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            setSubmissionMessage("Account created successfully! Welcome to LoanCorp.");
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
        } catch (err) {
            if (err instanceof ZodError) {
                setErrors(err.flatten().fieldErrors as FormErrors);
                setSubmissionMessage("Please correct the errors in the form.");
            } else {
                setSubmissionMessage("An unexpected error occurred during validation.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-950 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-40 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
                <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPgo8L3N2Zz4=')] opacity-20"></div>

            <Navbar />

            {/* Hero Section */}
            <div className="relative z-10 pt-32 pb-16 px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">Join LoanCorp</h1>
                        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">Start your financial journey with cutting-edge lending solutions designed for the modern world</p>
                    </motion.div>

                    {/* Feature cards */}
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <FeatureCard icon={FiShield} title="Secure & Trusted" description="Bank-level security with end-to-end encryption" />
                        <FeatureCard icon={FiTrendingUp} title="Fast Approval" description="Get approved in minutes, not days" />
                        <FeatureCard icon={FiAward} title="Best Rates" description="Competitive rates tailored to your profile" />
                    </motion.div>
                </div>

                {/* Form Section */}
                <div className="flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="backdrop-blur-2xl bg-gray-900/50 border border-gray-700/50 rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-cyan-600/5"></div>
                            <div className="relative p-8 sm:p-12">
                                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-center mb-12">
                                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Create Your Account</h2>
                                    <p className="text-gray-400">Fill in your details to get started with your loan application</p>
                                </motion.div>

                                <div className="space-y-8">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                        <InputField label="Full Name" name="name" icon={FiUser} formData={formData} handleChange={handleChange} errors={errors} />
                                        <InputField label="Email Address" name="email" type="email" icon={FiMail} formData={formData} handleChange={handleChange} errors={errors} />
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                        <InputField label="Monthly Income" name="monthlyIncome" type="number" icon={FiDollarSign} formData={formData} handleChange={handleChange} errors={errors} />
                                        <InputField
                                            label="Previous Loan History"
                                            name="previousLoan"
                                            icon={FiCheckCircle}
                                            options={["Yes", "No"]}
                                            formData={formData}
                                            handleChange={handleChange}
                                            errors={errors}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                        <InputField
                                            label="Marital Status"
                                            name="maritalStatus"
                                            icon={FiHeart}
                                            options={["Single", "Married", "Divorced", "Widowed"]}
                                            formData={formData}
                                            handleChange={handleChange}
                                            errors={errors}
                                        />
                                        <InputField
                                            label="Number of Dependencies"
                                            name="numberOfDependencies"
                                            type="number"
                                            icon={FiUsers}
                                            formData={formData}
                                            handleChange={handleChange}
                                            errors={errors}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                        <InputField label="City" name="city" icon={FiMapPin} formData={formData} handleChange={handleChange} errors={errors} />
                                        <InputField label="State" name="state" icon={FiGlobe} formData={formData} handleChange={handleChange} errors={errors} />
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)" }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={handleSubmit}
                                        className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white py-5 px-8 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm relative overflow-hidden group"
                                        disabled={isLoading}>
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                        {isLoading ? (
                                            <div className="flex items-center justify-center space-x-3">
                                                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                <span>Creating Account...</span>
                                            </div>
                                        ) : (
                                            <span className="relative z-10">Create Account & Continue</span>
                                        )}
                                    </motion.button>

                                    <AnimatePresence>
                                        {submissionMessage && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                                className={`p-6 rounded-2xl backdrop-blur-md border ${
                                                    submissionMessage.includes("successful")
                                                        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                                                        : "bg-red-500/10 border-red-500/30 text-red-300"
                                                } text-center`}>
                                                <div className="flex items-center justify-center space-x-2">
                                                    {submissionMessage.includes("successful") ? <FiCheckCircle className="text-xl" /> : <FiX className="text-xl" />}
                                                    <span className="font-medium">{submissionMessage}</span>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </motion.div>
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
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="space-y-3">
        <label htmlFor={name} className="block text-sm font-semibold text-gray-300">
            {label}
        </label>
        <div className="relative group">
            {Icon && (
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 z-10">
                    <Icon className="h-5 w-5 text-gray-500 group-focus-within:text-blue-400 transition-colors duration-200" />
                </div>
            )}
            {options ? (
                <select
                    id={name}
                    name={name}
                    value={formData[name] as string}
                    onChange={handleChange}
                    className={`block w-full rounded-2xl backdrop-blur-md bg-gray-800/50 border border-gray-700/50 py-4 pr-4 text-white placeholder-gray-500 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-200 hover:bg-gray-800/70 hover:border-gray-600/50 ${
                        Icon ? "pl-12" : "pl-4"
                    } ${errors[name] ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20" : ""}`}>
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
                    className={`block w-full rounded-2xl backdrop-blur-md bg-gray-800/50 border border-gray-700/50 py-4 pr-4 text-white placeholder-gray-500 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-200 hover:bg-gray-800/70 hover:border-gray-600/50 ${
                        Icon ? "pl-12" : "pl-4"
                    } ${errors[name] ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20" : ""}`}
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
                    className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl p-3 backdrop-blur-sm flex items-center space-x-2">
                    <FiX className="text-red-400 flex-shrink-0" />
                    <span>{errors[name][0]}</span>
                </motion.p>
            )}
        </AnimatePresence>
    </motion.div>
);
